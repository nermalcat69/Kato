import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = "edge"

export async function POST(req: Request) {
  const { type, equation } = await req.json()

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that solves equations.",
      },
      {
        role: "assistant",
        content: `Show me how to solve ${type} here is ${equation}.${
          type === "Quadratic Equations"
            ? "Well Hello there :D niter this side, To solve your equation, and i will solve the equation step by step. Can you please send your equation again please ^_^ ?"
            : null
        } 
      
      
        Please base the changes on this context: ${equation}${
          equation.slice(-1) === "." ? "" : "."
        }`,
      },
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
