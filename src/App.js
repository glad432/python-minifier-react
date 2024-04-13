import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import TypewriterComponent from "./Components/Typewriter";
import EditableEditor from "./Components/EditableEditor";
import ReadonlyEditor from "./Components/ReadonlyEditor";
import Footer from "./Components/Footer";

const App = () => {
  const [content, setContent] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.getElementById("mode").className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleContentChange = (value, event) => {
    setContent(value);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div id="mode" className={darkMode ? "dark" : "light"}>
      <div className="bg-gray-100 font-sans transition-all duration-200 ease-in-out enable-motion">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="mx-4 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-4 md:p-8 bg-white mt-8 mb-8 rounded-lg shadow transition-all duration-100 ease-in-out">
          <TypewriterComponent />
          <EditableEditor
            content={content}
            onContentChange={handleContentChange}
            darkMode={darkMode}
          />
          <ReadonlyEditor content={content} darkMode={darkMode} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
