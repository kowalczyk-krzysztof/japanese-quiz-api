import { Request, Response } from "express"
import { generateWord } from "../utils/generateWord"
import { mapToWordDto } from "../utils/mapToWordDto"

export default async (_: Request, res: Response) => {
  try {
    const generatedWord = generateWord()
    const result = mapToWordDto(generatedWord)
    res.setHeader("Access-Control-Allow-Origin", "*").status(200).json(result)
  } catch (e) {
    console.log(e)
    res.status(404).json(e)
  }
}
