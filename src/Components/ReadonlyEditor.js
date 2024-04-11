import React from 'react';
import Editor from '@monaco-editor/react';

const ReadonlyEditor = ({ content, darkMode }) => {
  const linesCount = content.split('\n').length;
  const charactersCount = content.length;

  return (
    <div>
      <span>
        Lines: {linesCount}, Characters: {charactersCount}
      </span>
      <Editor
        height="290px"
        width="auto"
        defaultLanguage="python"
        theme={darkMode ? 'vs-dark' : 'vs-light'}
        defaultValue=""
        value={content}
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
      />
    </div>
  );
}

export default ReadonlyEditor;
