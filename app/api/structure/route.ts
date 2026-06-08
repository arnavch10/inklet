import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const formData = await request.formData();

    const file = formData.get("text");

    if (!(file instanceof File)) {
        return Response.json({ error: "Missing text file" }, { status: 400 });
    }
    
    const structuredJson = await openai.text


}