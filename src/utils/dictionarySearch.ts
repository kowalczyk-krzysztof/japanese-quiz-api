const dictionary = require("../../data/jmdict.json")

export type DictionaryObject = {
  readonly kanji: string[]
  readonly kana: string[]
  readonly definition: string[][]
}

export const dictionarySearch = (input: string): DictionaryObject[] =>
  input.length === 1
    ? dictionary.filter((el: DictionaryObject) => el.kanji.some((el) => el.includes(input)))
    : dictionary.filter((el: DictionaryObject) => el.kanji.some((el) => el === input))
