const kanjiList = require("../../data/kanji.json")
import { generateRandomNumber } from "./generateRandomNumber"

// Due to a large number of possibilities, the generated word will most likely not be a real word. To counter this, first I'm gonna roll a number - either 0 or 1. If 0 is rolled then generate a random word, which has a chance of being a real word. If 1 is rolled then only generate one kanji and search for words containing it in dictionary.

export const generateWord = () => {
  const shouldGenerateRandomWord = !!generateRandomNumber(0, 1)
  const numberOfKanjis = kanjiList.kanji.length - 1
  const firstKanji = kanjiList.kanji[generateRandomNumber(0, numberOfKanjis)]
  const secondKanji = kanjiList.kanji[generateRandomNumber(0, numberOfKanjis)]

  return shouldGenerateRandomWord ? `${firstKanji}${firstKanji === secondKanji ? `々` : secondKanji}` : firstKanji
}
