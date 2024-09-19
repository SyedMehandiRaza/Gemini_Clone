import { createContext, useState } from "react";
import run from "../config/gemini.js"; // Ensure this path is correct

console.log("Run function:", run); // Check if this logs a function

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    console.log("Sending prompt:", prompt);
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input)
      const response = await run(input);
      setResultData(response)
      setLoading(false)
      setInput("") 
      console.log("Response:", response);
    } catch (error) {
      console.error("Error in onSent:", error);
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
