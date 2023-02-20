import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function askQuestion(phil, question) {
  console.log(phil, question, import.meta.env.VITE_OPENAI_API_KEY);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Respond as the ancient philosopher ${phil} to the following question: ${question}
    Your response should be about a paragraph long. 2-3 sentences should be enough. You do not need to provide context for who you are. You can just respond to the question.
    Then, in a new paragraph, still responding as ${phil}, point the user to the texts or books they can read to learn more about the principles behind your answer.`,
    max_tokens: 300,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  return response.data.choices[0].text;
}

export { askQuestion };
