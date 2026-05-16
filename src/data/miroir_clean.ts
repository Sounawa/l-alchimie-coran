export interface Tajalli {
  label: string;
  ar: string;
  color: string;
  text: string;
}

export interface MiroirEntry {
  reference: string;
  theme: string[];
  emotion: string;
  difficulty: "débutant" | "intermédiaire" | "avancé";
  relatedNames: string[];
  mirrorVersion: string;
  reflection: string;
  tajalli: Tajalli[];
  munajat: string;
}

export const MIROIR: Record<string, MiroirEntry> = {};

