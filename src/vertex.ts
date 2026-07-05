import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatMessage } from "./types.js";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function callGemini(
  messages: ChatMessage[]
): Promise<string> {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = messages
    .map((m) => `[${m.role.toUpperCase()}]\n${m.content}`)
    .join("\n\n");

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (err) {
      const msg = String(err);

      if (
        msg.includes("429") &&
        !msg.includes("RequestsPerDay") &&
        attempt < 3
      ) {
        const delay = attempt * 30000;

        console.log(
          `Rate limited. Retrying in ${
            delay / 1000
          } seconds...`
        );

        await new Promise((r) =>
          setTimeout(r, delay)
        );

        continue;
      }

      throw err;
    }
  }

  throw new Error("Gemini request failed");
}