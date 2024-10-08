// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyDF7ydQaUuArA0W3nwV9BQ2SuNOBhapxZg"; // Use an environment variable in production
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [],
//   });

//   // Send the prompt as an array of message objects
//   const result = await chatSession.sendMessage([{ text: prompt }]);
//   console.log("Result from chat session:", result.response.text()); // Ensure this logs the expected output
//   return result.response.text();
// }

// export default run; // Ensure this is the last line








import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDF7ydQaUuArA0W3nwV9BQ2SuNOBhapxZg"; // Use an environment variable in production
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  // Send the prompt as an array of message objects
  const result = await chatSession.sendMessage([{ text: prompt }]);
  console.log("Result from chat session:", result.response.text()); // Ensure this logs the expected output
  return result.response.text();
}

export default run; // Ensure this is the last line
