const axios = require('axios');

async function summarizeText(text) {
    let data = JSON.stringify({
        "inputs": text,
        "parameters": {
            "max_length": 100,
            "min_length": 30
        }
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + process.env["ACCESS_TOKEN"]
        },
        data: data,
        timeout: 5000 
    };

    try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        return response.data[0]?.summary_text || 'No summary returned.';
    } catch (error) {
        if (error.code === 'EAI_AGAIN') {
            console.log('Network error, retrying...');
            return summarizeText(text); 
        }
        console.log(error);
        return 'An error occurred during summarization.';
    }
}

module.exports = summarizeText;
