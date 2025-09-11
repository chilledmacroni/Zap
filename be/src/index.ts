import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is not set.");
}

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main() {
    const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: "create a TODO APP in react",
  });
   for await (const chunk of stream) {
    process.stdout.write(chunk.text ?? "");
  }
}

await main();