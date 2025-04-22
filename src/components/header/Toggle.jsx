import React, { useState } from "react";



export default function Toggle(props) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    document.documentElement.classList.toggle("dark"); // toggles dark mode
    if (props.showAlert) {
      props.showAlert(
        isOn ? "Light mode has been enabled" : "Dark mode has been enabled"
      );
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer flex items-center px-4 py-[9.4px] gap-2 bg-green-500 hover:bg-green-600  dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md"
    >
      <p className="text-sm">Mode</p>
      <i
        className={`fa-solid ${
          isOn ? "fa-toggle-on " : "fa-toggle-off "
        } text-xl transition-colors duration-300`}
      ></i>
    </button>
  );
}
