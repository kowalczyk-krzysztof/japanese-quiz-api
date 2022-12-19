import { getRandomIntBetweenInclusive } from "./getRandomIntBetweenInclusive"
import kanjiList from "../data/kanji.json"

const { kanji } = kanjiList

/* Due to a large number of possibilities, the generated word will most likely not be a real word. To counter this, first I'm gonna roll a number - either 0 or 1. If 0 is rolled then generate a random word, which has a chance of being a real word. If 1 is rolled then only generate one kanji and search for words containing it in dictionary. */

export const generateWord = () => {
  const shouldGenerateRandomWord = !!getRandomIntBetweenInclusive(0, 1)
  const total = kanji.length - 1
  const firstKanji = kanji[getRandomIntBetweenInclusive(0, total)]
  const secondKanji = kanji[getRandomIntBetweenInclusive(0, total)]
  return shouldGenerateRandomWord ? `${firstKanji}${firstKanji === secondKanji ? `々` : secondKanji}` : firstKanji
}
