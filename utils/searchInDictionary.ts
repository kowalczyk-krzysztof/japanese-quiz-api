import { createRequire } from "module"
const require = createRequire(import.meta.url)
const dictionary = require("../data/jmdict.json")

export type DictionaryDto = {
  readonly kanji: string[]
  readonly kana: string[]
  readonly definitions: string[][]
}

type Dictionary = {
  readonly words: DictionaryDto[]
}

const { words } = dictionary as Dictionary

export const searchInDictionary = (input: string): DictionaryDto[] =>
  words.filter(({ kanji }) => kanji.some((k) => (input.length === 1 ? k.includes(input) : k === input)))
