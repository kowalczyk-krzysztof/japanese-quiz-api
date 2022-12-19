import dictionary from "../data/jmdict.json"

type DictionaryDto = {
  readonly kanji: string[]
  readonly kana: string[]
  readonly definition: string[][]
}

type Dictionary = {
  readonly words: DictionaryDto[]
}

const { words } = dictionary as Dictionary

export const seachInDictionary = (input: string): DictionaryDto[] =>
  input.length === 1
    ? words.filter((el: DictionaryDto) => el.kanji.some((el) => el.includes(input)))
    : words.filter((el: DictionaryDto) => el.kanji.some((el) => el === input))
