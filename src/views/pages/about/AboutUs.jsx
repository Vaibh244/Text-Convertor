import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className=" mx-auto py-10 bg-gray-100 dark:bg-black items-center flex justify-center flex-col">
        <h1 className="text-5xl font-bold text-center text-green-500 my-10 underline dark:text-blue-500">About Us</h1>
        <p className="mt-4 text-xl text-center text-black dark:text-white">
          Welcome to TextMate — your all-in-one tool for converting, analyzing,
          and optimizing text effortlessly.
        </p>
        <p className="mt-4 text-sm text-center text-black w-1/2 mb-4 dark:text-white">
          At TextMate, we believe in the power of words. Whether you're a
          writer, student, developer, or content creator, our mission is to
          provide you with smart, simple, and efficient tools to help you get
          more done with your text.
        </p>
      </div>
      <div className=" flex justify-center items-center gap-6 my-10 dark:bg-gray-800">
        <div className="w-1/2 p-10 dark:bg-gray-800">
          <h2 className="text-4xl font-semibold text-center m-4 text-green-500 my-8 dark:text-blue-500">
            What we do?
          </h2>
          <p className="m-4 font-medium">
            {" "}
            We offer a suite of features designed to save you time and boost
            productivity:
          </p>
          <ul className="list-disc list-inside space-y-2 ">
            <li className="text-lg font-semibold">Text Conversion</li>
            <p className="m-10">
              Convert text between uppercase, lowercase, title case, sentence
              case, and more — instantly and accurately.
            </p>
            <li className="text-lg font-semibold">Text Analysis</li>
            <p className="m-10">
              Get detailed insights into your content. From word count and
              character count to readability scores, keyword density, and
              sentence structure — we’ve got you covered.
            </p>
            <li className="text-lg font-semibold">Quick Utilities</li>
            <p className="m-10">
              Remove extra spaces, reverse text, generate dummy text, and clean
              up formatting with a single click.
            </p>
          </ul>
        </div>
        <div className="w-1/2 p-10 dark:bg-gray-800 mb-36">
          <h2 className="text-4xl text-center m-4 text-green-500 my-8 font-semibold dark:text-blue-500">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              ⚡ Fast and Lightweight: No lag, no fuss. Just fast processing in
              your browser.
            </li>
            <li>
              🔒 Privacy First: Your text never leaves your device. No data is
              stored or shared.
            </li>
            <li>
              🎯 Accurate Results: Our tools are powered by robust algorithms to
              ensure precision and reliability.
            </li>
            <li>
              💡 User-Friendly: Clean interface and simple tools, designed with
              ease of use in mind.
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto py-10 bg-gray-100 dark:bg-black  items-center flex justify-center flex-col">
        <h1 className="text-5xl font-bold text-center text-green-500 my-10 underline dark:text-blue-500">
          Our Vision
        </h1>
        <p className="mt-4 text-xl text-center text-black w-1/2 mb-4 dark:text-white">
          We aim to become the go-to platform for anyone who works with text —
          from casual writers to professionals. We're constantly adding new
          features and improving based on your feedback.
        </p>
      </div>
    </div>
  );
}
