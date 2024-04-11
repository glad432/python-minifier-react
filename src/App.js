import React, { useState } from 'react';
import EditableEditor from './Components/EditableEditor';
import ReadonlyEditor from './Components/ReadonlyEditor';

function App() {
  const [content, setContent] = useState('');

  const handleContentChange = (value, event) => {
    setContent(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-[50rem] w-full p-8 rounded-lg shadow-lg">
        <EditableEditor content={content} onContentChange={handleContentChange} />
        <ReadonlyEditor content={content} />
      </div>
    </div>
  );
}

export default App;
