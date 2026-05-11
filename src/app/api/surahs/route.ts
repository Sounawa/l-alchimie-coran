import { NextResponse } from 'next/server';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

// Miroir references for counting - comprehensive list
const MIROIR_REFERENCES = [
  // Surah 1 - Al-Fatihah
  '1:1', '1:5',
  // Surah 2 - Al-Baqarah
  '2:152', '2:186', '2:255', '2:286',
  // Surah 3 - Ali 'Imran
  '3:139',
  // Surah 4 - An-Nisa
  '4:36',
  // Surah 5 - Al-Ma'idah
  '5:3',
  // Surah 6 - Al-An'am
  '6:59',
  // Surah 7 - Al-A'raf
  '7:43',
  // Surah 8 - Al-Anfal
  '8:17',
  // Surah 9 - At-Tawbah
  '9:51',
  // Surah 10 - Yunus
  '10:62',
  // Surah 11 - Hud
  '11:88',
  // Surah 12 - Yusuf
  '12:53',
  // Surah 13 - Ar-Ra'd
  '13:28',
  // Surah 14 - Ibrahim
  '14:34',
  // Surah 15 - Al-Hijr
  '15:99',
  // Surah 16 - An-Nahl
  '16:97',
  // Surah 17 - Al-Isra
  '17:82',
  // Surah 18 - Al-Kahf
  '18:24',
  // Surah 19 - Maryam
  '19:96',
  // Surah 20 - Ta-Ha
  '20:14',
  // Surah 21 - Al-Anbya
  '21:35',
  // Surah 22 - Al-Hajj
  '22:78',
  // Surah 23 - Al-Mu'minun
  '23:1',
  // Surah 24 - An-Nur
  '24:35',
  // Surah 25 - Al-Furqan
  '25:70',
  // Surah 26 - Ash-Shu'ara
  '26:88',
  // Surah 27 - An-Naml
  '27:62',
  // Surah 28 - Al-Qasas
  '28:56',
  // Surah 29 - Al-'Ankabut
  '29:69',
  // Surah 30 - Ar-Rum
  '30:21',
  // Surah 31 - Luqman
  '31:17',
  // Surah 32 - As-Sajdah
  '32:17',
  // Surah 33 - Al-Ahzab
  '33:56',
  // Surah 34 - Saba
  '34:3',
  // Surah 35 - Fatir
  '35:2',
  // Surah 36 - Ya-Sin
  '36:11',
  // Surah 39 - Az-Zumar
  '39:9', '39:53',
  // Surah 40 - Ghafir
  '40:60',
  // Surah 41 - Fussilat
  '41:53',
  // Surah 42 - Ash-Shura
  '42:37',
  // Surah 47 - Muhammad
  '47:7',
  // Surah 49 - Al-Hujurat
  '49:13',
  // Surah 50 - Qaf
  '50:16',
  // Surah 51 - Adh-Dhariyat
  '51:56',
  // Surah 53 - An-Najm
  '53:39',
  // Surah 54 - Al-Qamar
  '54:17',
  // Surah 55 - Ar-Rahman
  '55:13',
  // Surah 57 - Al-Hadid
  '57:3',
  // Surah 59 - Al-Hashr
  '59:21',
  // Surah 63 - Al-Munafiqun
  '63:9',
  // Surah 65 - At-Talaq
  '65:3',
  // Surah 67 - Al-Mulk
  '67:3',
  // Surah 73 - Al-Muzzammil
  '73:8',
  // Surah 87 - Al-A'la
  '87:14',
  // Surah 89 - Al-Fajr
  '89:27', '89:28',
  // Surah 93 - Ad-Duha
  '93:3',
  // Surah 94 - Ash-Sharh
  '94:5',
  // Surah 103 - Al-'Asr
  '103:1',
  // Surah 108 - Al-Kawthar
  '108:1',
  // Surah 110 - An-Nasr
  '110:1',
  // Surah 112 - Al-Ikhlas
  '112:1', '112:2',
  // Surah 114 - An-Nas
  '114:1'
];

export async function GET() {
  try {
    const response = await fetch(`${CDN_BASE}/index.json`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    const surahs = await response.json();
    
    // Add miroir count to each surah
    const surahsWithMiroir = surahs.map((s: any) => {
      const miroirCount = MIROIR_REFERENCES.filter(ref => 
        ref.startsWith(`${s.id}:`)
      ).length;
      return { ...s, miroirCount };
    });
    
    return NextResponse.json(surahsWithMiroir);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch surahs' }, { status: 500 });
  }
}
