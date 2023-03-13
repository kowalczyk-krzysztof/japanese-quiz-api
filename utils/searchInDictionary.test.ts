import { searchInDictionary } from "./searchInDictionary.js"

describe("two-kanji words dictionary searching", () => {
  it("gets a list of all words containing 狸", () => {
    const result = searchInDictionary("狸")
    expect(result).toHaveLength(5)
  })
  it("returns empty array when searching for a non-kanji character", () => {
    const result = searchInDictionary("a")
    expect(result).toHaveLength(0)
  })
  it("searches for exact match when using two-kanji word", () => {
    const result = searchInDictionary("狸藻")
    expect(result).toEqual([{ definitions: [["bladderwort"]], kana: ["たぬきも"], kanji: ["狸藻"] }])
  })
})
