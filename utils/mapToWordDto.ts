import { seachInDictionary } from "./seachInDictionary"
import { getRandomIntBetweenInclusive } from "./getRandomIntBetweenInclusive"

type WordDto = {
  readonly word: string
  readonly wordExists: boolean
  readonly reading: string
  readonly definitions: string[]
}

export const mapToWordDto = (input: string): WordDto => {
  const words = seachInDictionary(input)
  if (!words.length)
    return {
      word: input,
      wordExists: false,
      reading: "",
      definitions: [],
    }
  const random = getRandomIntBetweenInclusive(0, words.length - 1)
  const foundManyResults = words.length > 1
  return {
    word: foundManyResults ? words[random].kanji[0] : words[0].kanji[0],
    wordExists: true,
    reading: foundManyResults ? words[random].kana[0] : words[0].kana[0],
    definitions: words[foundManyResults ? random : 0].definition[0].map((el) => el),
  }
}
