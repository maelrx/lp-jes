import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google('gemini-1.5-flash'),
        messages,
        system: `Você é um assistente virtual amigável e prestativo para a página de Jessica. 
    Seu objetivo é ajudar os visitantes com dúvidas sobre o conteúdo da página, produtos ou serviços oferecidos.
    Responda sempre em português do Brasil, de forma educada e concisa.
    Se você não souber a resposta, diga que não sabe e sugira entrar em contato diretamente.`,
    });

    return result.toTextStreamResponse();
}
