import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [editableContent, setEditableContent] = useState('');
  const [readonlyContent, setReadonlyContent] = useState('');

  const handleEditableEditorChange = (value, event) => {
    setEditableContent(value);
    setReadonlyContent(value);
  };

  const editableLinesCount = editableContent.split('\n').length;
  const editableCharactersCount = editableContent.length;

  return (
    <div>
      <Editor
        height="300px"
        width="auto"
        defaultLanguage="python"
        theme="vs-dark"
        defaultValue=""
        options={{
          minimap: { enabled: false },
          matchBrackets: 'always',
          fontFamily: 'Source Code Pro',
          renderValidationDecorations: 'on',
          scrollbar: { vertical: 'visible', horizontal: 'visible' },
          fontWeight: 'bold',
          formatOnPaste: true,
          semanticHighlighting: true,
          folding: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: true,
          cursorStyle: 'line',
        }}
        value={editableContent}
        onChange={handleEditableEditorChange}
      />
      <span>
        Editable Editor - Lines: {editableLinesCount}, Characters: {editableCharactersCount}
      </span>
      <Editor
        height="300px"
        width="auto"
        defaultLanguage="python"
        theme="vs-dark"
        defaultValue=""
        options={{
          readOnly: true,
          minimap: { enabled: false },
          matchBrackets: 'always',
          fontFamily: 'Source Code Pro',
          renderValidationDecorations: 'on',
          scrollbar: { vertical: 'visible', horizontal: 'visible' },
          fontWeight: 'bold',
          formatOnPaste: true,
          semanticHighlighting: true,
          folding: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: true,
          cursorStyle: 'line',
        }}
        value={readonlyContent}
      />
      <span>
        Readonly Editor - Lines: {editableLinesCount}, Characters: {editableCharactersCount}
      </span>
    </div>
  );
}

export default App;
