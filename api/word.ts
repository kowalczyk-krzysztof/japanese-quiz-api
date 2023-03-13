import { Request, Response } from "express"
import { generateWord } from "../utils/generateWord.js"
import { mapToWordDto } from "../utils/mapToWordDto.js"
import { searchInDictionary } from "../utils/searchInDictionary.js"

export default async (_: Request, res: Response) => {
  try {
    const generatedWord = generateWord()
    const words = searchInDictionary(generatedWord)
    const result = mapToWordDto(generatedWord, words)
    res.setHeader("Access-Control-Allow-Origin", "*").status(200).json(result)
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
}
