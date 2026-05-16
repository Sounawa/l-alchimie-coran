import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, voice = 'tongtong', speed = 0.85 } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le texte est requis' },
        { status: 400 }
      );
    }

    // Limit text to 1024 characters (API constraint)
    const truncatedText = text.slice(0, 1024);

    // Import ZAI SDK
    const ZAI = (await import('z-ai-web-dev-sdk')).default;

    // Create SDK instance
    const zai = await ZAI.create();

    // Generate TTS audio
    const response = await zai.audio.tts.create({
      input: truncatedText.trim(),
      voice: voice,
      speed: speed,
      response_format: 'wav',
      stream: false,
    });

    // Get array buffer from Response object
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));

    // Return audio as response
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('TTS API Error:', error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Erreur de génération audio',
      },
      { status: 500 }
    );
  }
}
