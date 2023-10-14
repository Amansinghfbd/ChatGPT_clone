const { Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({ apiKey: "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" })
const openai = new OpenAIApi(configuration);

delete configuration.baseOptions.headers['User-Agent'];

export async function sendMsgtoOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temprature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}