// import { createContext, useState } from "react";
// import run from "../config/gemini.js"; // Ensure this path is correct

// console.log("Run function:", run); // Check if this logs a function

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const onSent = async (prompt) => {
//     setResultData("");
//       setLoading(true);
//       setShowResult(true)
//       setRecentPrompt(input)
//       const response = await run(input);
//       console.log("Response received:", response);
//       setResultData(response);
//       setLoading(false);
//       setInput("");
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     input,
//     setInput,
//   };

//   return (
//     <Context.Provider value={contextValue}>{props.children}</Context.Provider>
//   );
// };

// export default ContextProvider;












// import { createContext, useState } from "react";
// import run from "../config/gemini.js";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const onSent = async (prompt) => {
//     setLoading(true);
//     setShowResult(true);
//     setRecentPrompt(input);

//     try {
//         const response = await run(input);
//         console.log("Response from run function:", response); // Check this log
//         setResultData(response); // Correctly set resultData
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     } finally {
//         setLoading(false);
//         setInput(""); // Clear the input after sending
//     }
// };


//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     input,
//     setInput,
//     resultData,
//     setResultData,
//   };

//   return (
//     <Context.Provider value={contextValue}>{props.children}</Context.Provider>
//   );
// };

// export default ContextProvider;






import { createContext, useState } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    
    try {
      const response = await run(input);
      console.log("Response from run function:", response); // Check this log
      setResultData(response); // Set the result data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setInput("");
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
    resultData, // Include resultData in context
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
