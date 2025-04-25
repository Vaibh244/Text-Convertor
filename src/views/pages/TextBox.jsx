import React, { useState, useCallback } from "react";

import { toast } from "react-hot-toast";
import AISuggestions from "./dashboard/AISuggestions";

export default function TextBox(props) {
  const [text, setText] = useState("");

  const ChangeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const ChangeTextToUpper = useCallback(() => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Text converted to upper case");
    toast.success("Text converted to upper case");
  }, [text]);

  const ChangeTextToLower = useCallback(() => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Text converted to lower case");
    toast.success("Text converted to lower case");
  }, [text]);

  const clearText = useCallback(() => {
    setText("");
    toast.success("Text cleared");
  }, []);

  const copyText = useCallback(() => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard");
  }, [text]);

  const removeSpace = useCallback(() => {
    // let newText = text.split(/[ ]+/);
    // setText(newText.join(" "));
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    toast.success("Extra spaces removed");
  }, [text]);

  const buttonStyle =
    "btn mr-4 px-4 py-2 bg-green-500 rounded-md text-white font-md hover:bg-green-600 my-4 dark:bg-blue-500 dark:hover:bg-blue-600";

  return (
    <>
      <div className="mt-14 flex flex-col justify-center w-2/3 mx-auto bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
        <h1 className="text-center text-6xl text-green-600 dark:text-blue-500 mb-5 ">
          {props.Heading}{" "}
        </h1>

        <textarea
          name="analyzer"
          id="my-analyzer"
          value={text}
          onChange={ChangeText}
          className="w-full border-2 border-blue-300 p-5 focus:outline-none focus:ring-1 focus:ring-blue-500 font-serif text-gray-700 dark:bg-gray-800 dark:text-white darl:border-gray-600 dark:focus:ring-blue-500 resize-none"
          rows={6}
        ></textarea>
        
        <div className="mt-6">
          {/* Button Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            <button className={buttonStyle} onClick={ChangeTextToUpper}>
              {props.ChangeUpper}
            </button>

            <button className={buttonStyle} onClick={ChangeTextToLower}>
              {props.ChangeLower}
            </button>

            <button className={buttonStyle} onClick={clearText}>
              Clear Text
            </button>

            <button className={buttonStyle} onClick={copyText}>
              Copy Text
            </button>

            <button className={buttonStyle} onClick={removeSpace}>
              Remove Space
            </button>

        
          </div>

          {/* AI Suggestions */}
          <AISuggestions inputText={text} />
        </div>

        <div className="flex flex-col mt-4">
          <h2 className="text-3xl text-green-600 dark:text-blue-500 ">
            Analyzing your content:-
          </h2>
          <p className="text-md mt-2">
            Number of{" "}
            <span className="text-green-500 dark:text-blue-500">
              characters
            </span>{" "}
            in your content:{" "}
            <span className="text-green-500 dark:text-blue-500">
              {text.replace(/\s/g, "").length}
            </span>
          </p>
          <p className="text-md">
            Number of{" "}
            <span className="text-green-500 dark:text-blue-500">words</span> in
            your content:{" "}
            <span className="text-green-500 dark:text-blue-500">
              {
                text
                  .trim()
                  .split(/\s+/)
                  .filter((word) => word !== "").length
              }
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
