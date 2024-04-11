import React, { useState } from 'react';
import EditableEditor from './Components/EditableEditor';
import ReadonlyEditor from './Components/ReadonlyEditor';


function App() {
  const [content, setContent] = useState('');

  const handleContentChange = (value, event) => {
    setContent(value);
  };

  return (
    <div>
      <EditableEditor content={content} onContentChange={handleContentChange} />
      <ReadonlyEditor content={content} />
    </div>
  );
}

export default App;
