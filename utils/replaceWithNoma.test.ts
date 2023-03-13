import { replaceWithNoma } from "./replaceWithNoma.js"

describe("replacing repeating kanji with 々", () => {
  it("replaces the second repeating kanji with 々", () => {
    const result = replaceWithNoma("犬", "犬")
    expect(result).toBe("犬々")
  })
  it("returns concatenated arguments when they are different", () => {
    const result = replaceWithNoma("犬", "導")
    expect(result).toBe("犬導")
  })
})
