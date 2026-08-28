import OpenAI from "openai";

const prompt = process.argv.slice(2).join(" ").trim();

if (!prompt) {
  throw new Error("Provide a prompt as a command-line argument.");
}

const client = new OpenAI();
const completion = await client.chat.completions.create({
  model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
  messages: [{ role: "user", content: prompt }],
  stream: false,
});

const text = completion.choices[0]?.message.content;

if (!text) {
  throw new Error("The OpenAI response did not contain assistant text.");
}

console.log(text);
