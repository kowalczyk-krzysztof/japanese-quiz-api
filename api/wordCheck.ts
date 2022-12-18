import { Request, Response } from "express"
import { generateWord } from "./utils/generateWord"
import { generateWordObject } from "./utils/generateWordObject"

export default async (_: Request, res: Response) => {
  try {
    const generatedWord: string = generateWord()
    const result = generateWordObject(generatedWord)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(404).json({
      error: err,
    })
  }
}
