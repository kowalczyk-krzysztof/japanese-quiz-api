import { getRandomIntBetweenInclusive } from "./getRandomIntBetweenInclusive.js"

describe("generating random integers in range, inclusive", () => {
  it("generates an integer between 1 and 5, inclusive", () => {
    const result = getRandomIntBetweenInclusive(1, 5)
    expect(result).not.toBeLessThan(1)
    expect(result).not.toBeGreaterThan(5)
  })
})
