import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateMemeResponse(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:"You are a meme generator. Create funny, engaging responses in a meme format. Include both a meme caption and a description of what the meme image should look like. Format your response as JSON with 'caption' and 'imagePrompt' fields."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      
    });

    return JSON.parse(completion.choices[0].message.content || "{}");
  } catch (error) {
    console.error('Error generating meme:', error);
    throw error;
  }
}

export async function generateImage(imagePrompt: string) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      n: 1,
      size: "1024x1024",
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}