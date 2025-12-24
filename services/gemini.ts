
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client using the environment variable API_KEY strictly as defined in guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are a professional recruiting assistant for Guyana Recruitment Services, a staffing firm based in Guyana serving the Caribbean region. 
        You specialize in:
        1. Oil & Gas (Offshore operations, engineering, technical safety)
        2. Healthcare (Nurses, medical technicians, clinical staff)
        3. Hospitality (Hotel management, culinary, guest services)
        
        Keep your tone professional, helpful, and representative of Guyanese and Caribbean hospitality. 
        Answer questions about staffing services, how to apply for jobs, and general workforce advice for the region. 
        If asked about job applications, suggest they visit our Careers section.
        If asked about hiring, suggest they visit our Contact page or use the Request Staff button.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at +592 555-GUYANA.";
  }
};
