import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { getSystemPrompt } from "./prompts.js";
// Load environment variables from a .env file
dotenv.config();
// --- Initialization ---
// Ensure you have your API_KEY in a .env file
const ai = new GoogleGenAI({});
if (!ai) {
    throw new Error("API_KEY not found. Please create a .env file and add your API key.");
}
/**
 * Main function to generate content using the Gemini API.
 */
async function main() {
    try {
        // 1. Define the user's prompt
        const userInput = "make a to do app in nextjs";
        console.log(`--- Running with prompt: "${userInput}" ---`);
        // 2. Enrich the prompt with system instructions
        const finalPrompt = `
      ${getSystemPrompt()}
      Here is the user's request:
      <user_query>${userInput}</user_query>
    `;
        console.log("\n--- Sending enriched prompt to Gemini... ---");
        // 3. Call the API to generate content (non-streaming)
        const response = await ai.models.generateContentStream({
            model: "gemini-2.5-flash", // Model is specified in the call
            contents: finalPrompt,
        });
        // The response from this package is an async generator; collect the text from each chunk
        console.log("\n--- Gemini Response (Streaming) ---");
        // The response from this package is an async generator; process the stream
        for await (const chunk of response) {
            if (chunk.text) {
                // Write each chunk to the console as it arrives to show streaming
                process.stdout.write(chunk.text);
            }
        }
        console.log("\n\n--- End of Stream ---");
    }
    catch (error) {
        console.error("\n\nError calling Gemini API:", error);
    }
}
// Run the main function
main();
//# sourceMappingURL=index.js.map