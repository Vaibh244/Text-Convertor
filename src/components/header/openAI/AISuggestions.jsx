import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AISuggestions({ inputText }) {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  // Use the environment variable for the API key
  const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  const GEMINI_BODY = {
    contents: [
      {
        parts: [
          {
            text: inputText || "Explain how AI works", // Default text if inputText is empty
          },
        ],
      },
    ],
  };

  const getSuggestion = async () => {
    if (!inputText) return; // Do not proceed if there is no inputText

    setLoading(true);
    console.log("Calling API");

    // let prompt = "";

    // switch (mode) {
    //   case "grammar":
    //     prompt = `Fix the grammar: ${inputText}`;
    //     break;
    //   case "formal":
    //     prompt = `Rewrite this in a formal tone: ${inputText}`;
    //     break;
    //   case "informal":
    //     prompt = `Rewrite this in an informal tone: ${inputText}`;
    //     break;
    //   case "synonyms":
    //     prompt = `Suggest synonyms for: ${inputText}`;
    //     break;
    //   default:
    //     prompt = inputText;
    // }

    try {
      // Use fetch to make the API call
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(GEMINI_BODY), // Send the body to the API
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No suggestion found.";
      setSuggestion(reply);
    } catch (error) {
      console.error("Gemini API error:", error);
      setSuggestion("Error fetching suggestion from Gemini.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-0">
      <button
        className="btn bg-green-500 rounded-md font-md px-4 py-2 hover:bg-green-600 dark:bg-blue-500 text-white dark:hover:bg-blue-600"
        onClick={getSuggestion}
        disabled={loading}
      >
        {loading ? "Getting Suggestion..." : "Get Gemini Suggestion"}
      </button>

      {suggestion && (
        <div className="mt-4 dark:bg-gray-900 bg-gray-100 rounded text-gray-800">
          <p className="text-xl dark:text-blue-500">AI Suggestion:</p>
          {/* <ReactMarkdown className="prose dark:prose-invert mt-2">{suggestion}</ReactMarkdown> */}
          <div className="prose dark:prose-invert mt-2 dark:text-white text-md">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p {...props} />,
                h1: ({ node, ...props }) => <h1 {...props} />,
                h2: ({ node, ...props }) => <h2 {...props} />,
                li: ({ node, ...props }) => <li {...props} />,
                // add more as needed
              }}
            >
              {suggestion}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
