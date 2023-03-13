import { getRandomIntBetweenInclusive } from "./getRandomIntBetweenInclusive.js"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const kanjiList = require("../data/kanji.json")

const { kanji } = kanjiList

/* Due to a large number of possibilities, the generated word will most likely not be a real word.
To counter this, I'm doing a coin flip - I roll a number - either 0 or 1. If 0 is rolled then I generate a random word, which has a chance of being a real word. If 1 is rolled then I only generate one kanji and search for words containing it in dictionary. */

export const generateWord = () => {
  const shouldGenerateRandomWord = !!getRandomIntBetweenInclusive(0, 1)
  const total = kanji.length - 1
  const firstKanji = kanji[getRandomIntBetweenInclusive(0, total)]
  const secondKanji = kanji[getRandomIntBetweenInclusive(0, total)]
  return shouldGenerateRandomWord ? `${firstKanji}${secondKanji}` : firstKanji
}
