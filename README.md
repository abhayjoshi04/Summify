# Summify

**Summify** is an AI-powered text summarizer that condenses long pieces of text into concise summaries. This project leverages Hugging Face's powerful BART model to generate meaningful and readable summaries from the input text.

## Features

- **Text Summarization:** Efficiently summarizes long text inputs into shorter, more digestible content.
- **Interactive UI:** Simple and user-friendly interface for easy text input and summary generation.
- **Real-time Processing:** Provides instant summaries with minimal latency.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Hugging Face API Key:** You need an API key to access Hugging Face’s models. Obtain it from [Hugging Face](https://huggingface.co/).

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhayjoshi04/Summify.git
   cd Summify

2. **Install dependencies:**
   ```bash
   npm install
3. **Set Up Environment Variables:**
   - Create a .env file in the root directory.
   - Add your Hugging Face API token
    ```bash
    ACCESS_TOKEN=your_hugging_face_access_token_here
4. **Run the Application:**

- Start the server:
  ```bash
  node index.js
- Open your browser and navigate to http://localhost:3000/ to use the application.

## Usage
- Enter Text: Type or paste the text you want to summarize into the text area on the webpage.
- Submit: Click the "Summarize" button to generate the summary.
- View Summary: The summarized text will appear in the designated output area.

## Acknowledgments

- Hugging Face for providing the text summarization model.
- Express.js for the web framework.
- Axios for handling HTTP requests.
