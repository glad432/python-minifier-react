import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import EditableEditor from './Components/EditableEditor';
import ReadonlyEditor from './Components/ReadonlyEditor';

function App() {
  const [content, setContent] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ? true : false
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleContentChange = (value, event) => {
    setContent(value);
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${darkMode ? 'bg-[#1C1D1D] text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-[50rem] w-full p-8 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button onClick={toggleTheme} className="mb-2 p-2 bg-gray-300 text-gray-900 rounded-md focus:outline-none">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-2" />
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <EditableEditor content={content} onContentChange={handleContentChange} darkMode={darkMode} />
        <ReadonlyEditor content={content} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
