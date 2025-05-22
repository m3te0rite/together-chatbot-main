import { systemPrompt } from "@/lib/utils";
import Together from "together-ai";

const together = new Together();

export async function POST(request: Request) {
  const { messages } = await request.json();

  const res = await together.chat.completions.create({
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
    stream: true,
  });

  return new Response(res.toReadableStream());
}
