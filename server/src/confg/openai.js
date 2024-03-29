const { Configuration, OpenAIApi} = require("openai");

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apikey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration)
    }
    static textCompletion({prompt}){
        return{
                model: "text-davinci-003",
                prompt: `${prompt}`,
                temperature: 0,
                max_tokens: 3500,
                top_p:1,
                frenquecy_penalty: 0.5,
                presence_penalty: 0,
        }
    }
}
