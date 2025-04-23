import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AISuggestions({ inputText }) {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonStyleAi =
    "btn mr-4 px-4 py-2 bg-green-500 rounded-md text-white font-md hover:bg-green-600 my-4 dark:bg-blue-500 dark:hover:bg-blue-600";

  const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const getSuggestion = async (mode = "") => {
    if (!inputText) return;

    setLoading(true);
    console.log("Calling API");

    let prompt = "";

    switch (mode) {
      case "grammar":
        prompt = `Fix the grammar: ${inputText}`;
        break;
      case "formal":
        prompt = `Rewrite this in a formal tone: ${inputText}`;
        break;
      case "informal":
        prompt = `Rewrite this in an informal tone: ${inputText}`;
        break;
      case "synonyms":
        prompt = `Suggest synonyms for: ${inputText}`;
        break;
      default:
        prompt = inputText;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
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
    <div className="">
      {/* Button Group */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <button
          className={buttonStyleAi}
          onClick={() => getSuggestion()}
          disabled={loading}
        >
          {loading ? "Suggesting..." : "Get Suggestion"}
        </button>
        <button
          className={buttonStyleAi}
          onClick={() => getSuggestion("grammar")}
        >
          Fix Grammar
        </button>
        <button
          className={buttonStyleAi}
          onClick={() => getSuggestion("formal")}
        >
          Make Formal
        </button>
        <button
          className={buttonStyleAi}
          onClick={() => getSuggestion("informal")}
        >
          Make Informal
        </button>
        <button
          className={buttonStyleAi}
          onClick={() => getSuggestion("synonyms")}
        >
          Get Synonyms
        </button>
      </div>

      {/* Suggestion Output */}
      {suggestion && (
        <div className="mt-4 dark:bg-gray-900 bg-gray-100 rounded text-gray-800 p-4">
          <p className="text-xl dark:text-blue-500 font-semibold mb-2">
            AI Suggestion:
          </p>
          <div className="prose dark:prose-invert mt-2 dark:text-white text-md">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p {...props} />,
                h1: ({ node, ...props }) => <h1 {...props} />,
                h2: ({ node, ...props }) => <h2 {...props} />,
                li: ({ node, ...props }) => <li {...props} />,
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
