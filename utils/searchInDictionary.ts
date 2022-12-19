import dictionary from "../data/jmdict.json"

type DictionaryDto = {
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
