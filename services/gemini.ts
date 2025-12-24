import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * VITE REQUIREMENT: 
 * 1. Variables MUST start with VITE_ to be used in the browser.
 * 2. Use 'import.meta.env' instead of 'process.env'.
 */
const API_KEY = import.meta.env.VITE_API_KEY;

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Note: 'gemini-3-flash-preview' is not a valid public model name. 
    // Use 'gemini-1.5-flash' for the best performance.
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", 
      systemInstruction: `You are a professional recruiting assistant for Guyana Recruitment Services... (Keep your existing prompt here)`
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at +592 555-GUYANA.";
  }
};