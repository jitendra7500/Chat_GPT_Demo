const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.Chat = async (req, res) => {
    try {

        const { prompt } = req.body;

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
            temperature: 0,
        });

        return res.status(200).send({
            msg: "Success",
            data: completion.data
        });
    } catch (error) {
        
        console.log(error.message);

        return res.status(500).send({
            msg: error.message
        });
    }
}