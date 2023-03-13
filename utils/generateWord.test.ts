import { generateWord } from "./generateWord.js"

const kanjiRegex = new RegExp(/[一-龯]/)

describe("generating random two or one kanji word", () => {
  it("generates a random kanji word, between 1 and 2 characters", () => {
    const result = generateWord()
    expect(result.length).not.toBeLessThan(1)
    expect(result.length).not.toBeGreaterThan(2)
    expect(result).toMatch(kanjiRegex)
  })
})
