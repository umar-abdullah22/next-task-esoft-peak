import { OpenAI } from "openai";
import { AI_CONFIG, RETRY_CONFIG, ERROR_MESSAGES } from "./constants";
import { SalesInsights } from "@/types/types";
import sleep from "./sleep";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateAISummary(insights: SalesInsights): Promise<string> {
    let retries = 0;

    while (retries < RETRY_CONFIG.MAX_RETRIES) {
        try {
            const response = await openai.chat.completions.create({
                model: AI_CONFIG.MODEL,
                messages: [
                    { role: "system", content: AI_CONFIG.SYSTEM_PROMPT },
                    { role: "user", content: JSON.stringify(insights) },
                ],
                max_tokens: AI_CONFIG.MAX_TOKENS,
            });

            return response?.choices[0]?.message?.content?.trim() || ERROR_MESSAGES.AI_FAILURE;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(`AI API Error (Attempt ${retries + 1}):`, error);

            // Handle OpenAI rate limits
            if (error.status === 429) {
                const backoffTime = RETRY_CONFIG.INITIAL_BACKOFF * Math.pow(2, retries);
                console.warn(`Rate limit hit. Retrying in ${backoffTime / 1000}s...`);
                await sleep(backoffTime);
            } else {
                break; // Don't retry for other errors
            }
        }

        retries++;
    }

    return ERROR_MESSAGES.AI_FAILURE;
}
