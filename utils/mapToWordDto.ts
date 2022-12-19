import { seachInDictionary } from "./seachInDictionary"
import { getRandomIntBetweenInclusive } from "./getRandomIntBetweenInclusive"
import { replaceWithNoma } from "./replaceWithNoma"

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
  const word = words[foundManyResults ? random : 0].kanji[0]
  return {
    word: replaceWithNoma(word[0], word[1]),
    wordExists: true,
    reading: words[foundManyResults ? random : 0].kana[0],
    definitions: words[foundManyResults ? random : 0].definitions[0].flat(),
  }
}
