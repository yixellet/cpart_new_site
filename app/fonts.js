import { Noto_Serif, Noto_Sans } from 'next/font/google'

export const noto_serif = Noto_Serif({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['100', '400', '700'],
});

export const noto_sans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['100', '400', '700'],
});