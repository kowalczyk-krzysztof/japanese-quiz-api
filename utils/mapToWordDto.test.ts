import { mapToWordDto } from "./mapToWordDto"

describe("mapping to WordDto object", () => {
  it("maps input to WordDto object", () => {
    const result = mapToWordDto("狸藻", [{ definitions: [["bladderwort"]], kana: ["たぬきも"], kanji: ["狸藻"] }])
    expect(result).toEqual({ word: "狸藻", wordExists: true, reading: "たぬきも", definitions: ["bladderwort"] })
  })
  it("returns default object when words array is empty", () => {
    const result = mapToWordDto("狸藻", [])
    expect(result).toEqual({ word: "狸藻", wordExists: false, reading: "", definitions: [] })
  })
})
