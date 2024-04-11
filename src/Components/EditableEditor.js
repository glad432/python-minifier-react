import React from 'react';
import Editor from '@monaco-editor/react';

const EditableEditor = ({ content, onContentChange }) => {
  const linesCount = content.split('\n').length;
  const charactersCount = content.length;

  return (
    <div>
      <Editor
        height="290px"
        width="auto"
        defaultLanguage="python"
        theme="vs-dark"
        defaultValue=""
        value={content}
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
        onChange={onContentChange}
      />
      <span>
        Lines: {linesCount}, Characters: {charactersCount}
      </span>
    </div>
  );
}

export default EditableEditor;
