import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import gameRouter from "./routes/game"

dotenv.config({ path: ".env" })

const app = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", "https:", "data:"],
        frameAncestors: ["'self'"],
        frameSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'self'", "blob:"],
        mediaSrc: ["'self'", "blob:", "data:"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https:", "'unsafe-inline'"],
        upgradeInsecureRequests: [],
        "connect-src": ["'self'", "*"],
      },
    },
  })
)

app.use("/api/v1/game", gameRouter)
app.set("trust proxy", 1)

const PORT = (process.env.PORT as unknown as number) || 8080

export const server = app.listen(PORT, (): void => {
  console.log(`Server is up and running @${PORT} in ${process.env.NODE_ENV} mode`)
})
