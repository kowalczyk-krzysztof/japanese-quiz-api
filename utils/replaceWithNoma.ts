export const replaceWithNoma = (firstKanji: string, secondKanji: string) =>
  `${firstKanji}${firstKanji === secondKanji ? `々` : secondKanji}`
