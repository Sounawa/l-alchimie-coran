import { NextResponse } from 'next/server';

// This API lazily loads miroir data from the large file
// to avoid OOM issues during initial server start

let miroirData: Record<string, any> | null = null;

function extractField(content: string, fieldName: string, startIdx: number, endIdx: number): string {
  const chunk = content.substring(startIdx, endIdx);

  // For backtick strings
  const backtickPattern = new RegExp(fieldName + ':\\s*`([\\s\\S]*?)`', 'm');
  const backtickMatch = chunk.match(backtickPattern);
  if (backtickMatch) {
    return backtickMatch[1];
  }

  // For regular strings
  const quotePattern = new RegExp(fieldName + ':\\s*"([^"]*)"');
  const quoteMatch = chunk.match(quotePattern);
  if (quoteMatch) {
    return quoteMatch[1];
  }

  return '';
}

function extractArray(content: string, fieldName: string, startIdx: number, endIdx: number): string[] {
  const chunk = content.substring(startIdx, endIdx);
  const pattern = new RegExp(fieldName + ':\\s*\\[([^\\]]+)\\]');
  const match = chunk.match(pattern);
  if (match) {
    return match[1].match(/"([^"]+)"/g)?.map(t => t.replace(/"/g, '')) || [];
  }
  return [];
}

function loadMiroirData(): Record<string, any> {
  if (miroirData) return miroirData;

  // Use dynamic import with caching
  try {
    // We'll use a simpler approach - read the file directly
    const fs = require('fs');
    const path = require('path');
    const miroirPath = path.join(process.cwd(), 'src/data/miroir.ts');
    const content = fs.readFileSync(miroirPath, 'utf8');

    const entries: Record<string, any> = {};

    // Find all entry starts (both formats)
    const entryStarts: { ref: string; start: number }[] = [];

    // Format 1: "1:1": {
    const inlinePattern = /"(\d+:\d+)":\s*\{/g;
    let match;
    while ((match = inlinePattern.exec(content)) !== null) {
      entryStarts.push({ ref: match[1], start: match.index });
    }

    // Format 2: MIROIR["5:12"] = {
    const assignPattern = /MIROIR\["(\d+:\d+)"\]\s*=\s*\{/g;
    while ((match = assignPattern.exec(content)) !== null) {
      entryStarts.push({ ref: match[1], start: match.index });
    }

    // Sort by position
    entryStarts.sort((a, b) => a.start - b.start);

    // Extract data for each entry
    for (let i = 0; i < entryStarts.length; i++) {
      const start = entryStarts[i].start;
      // Find the end (next entry or end of object)
      let end = content.length;
      if (i < entryStarts.length - 1) {
        end = entryStarts[i + 1].start;
      } else {
        // Find the closing of the main object
        const lastBrace = content.lastIndexOf('};', content.length);
        if (lastBrace > start) end = lastBrace;
      }

      const ref = entryStarts[i].ref;
      const chunk = content.substring(start, Math.min(end, start + 15000)); // Limit size per entry

      // Extract basic fields
      const entry: any = {
        reference: ref,
        theme: extractArray(content, 'theme', start, Math.min(end, start + 2000)),
        emotion: extractField(chunk, 'emotion', 0, chunk.length),
        mirrorVersion: extractField(chunk, 'mirrorVersion', 0, chunk.length),
        reflection: extractField(chunk, 'reflection', 0, chunk.length),
        munajat: extractField(chunk, 'munajat', 0, chunk.length),
        tajalli: [] // We'll add the 6 tajalli entries
      };

      // Add default tajalli entries
      entry.tajalli = [
        { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: extractField(chunk, "text", 0, chunk.length) || "La forme originelle du verset." },
        { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Ce que ce verset me reflète." },
        { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'inversion de perspective." },
        { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Le sens universel." },
        { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le sens caché." },
        { label: "L'Ombre", ar: "الظل", color: "#6366f1", text: "L'ombre révèle mes résistances cachées. Ce que je refuse de voir en moi est éclairé par cette révélation." }
      ];

      entries[ref] = entry;
    }

    miroirData = entries;
    return entries;
  } catch (error) {
    console.error('Error loading miroir data:', error);
    return {};
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;

  try {
    const data = loadMiroirData();
    const entry = data[ref];

    if (!entry) {
      return NextResponse.json({ error: 'Entry not found', ref }, { status: 404 });
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error in miroir API:', error);
    return NextResponse.json({ error: 'Failed to load miroir data' }, { status: 500 });
  }
}
