import Navbar from "./components/header/Navbar.jsx";
import TextBox from "./views/pages/TextBox.jsx";
import AboutUs from "./views/pages/about/AboutUs.jsx";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ContactUs from "./views/pages/Contact/ContactUs.jsx";
import logoImage from "./assets/images/imageGallery/logo.png";
import {toast, Toaster } from 'react-hot-toast';


function App() {
  const [alert, setAlert] = useState(null); 

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // };

  const showAlert = (message) => {
    toast.success(message); // or toast.error(message)
  };
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Navbar
          logoImage = {logoImage}
          Gallary="Photoshoot"
          showAlert={showAlert}
        />
        {/* <Alert alert={alert} /> */}

        <Toaster position="top-center" reverseOrder={false} />

        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <TextBox
                  Heading="Text-Convertor"
                  ChangeUpper="UpperCase"
                  ChangeLower="LowerCase"
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
