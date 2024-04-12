import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

const ReadonlyEditor = ({ content, darkMode }) => {
  const Minifiededitor = useRef(null);

  const linesCount = content.split('\n').length;
  const charactersCount = content.length;

  const handleEditorDidMount = (editor, monaco) => {
    Minifiededitor.current = editor;
  };

  const handleCopyContent = async () => {
    if (Minifiededitor.current) {
      await navigator.clipboard.writeText(Minifiededitor.current.getValue());
      const lastLineNumber = Minifiededitor.current.getModel().getLineCount();
      Minifiededitor.current.revealLine(lastLineNumber);
      Minifiededitor.current.setSelection({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: lastLineNumber,
        endColumn: Minifiededitor.current.getModel().getLineMaxColumn(lastLineNumber),
      });
    }
  };

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
        onMount={handleEditorDidMount}
      />
      <button className='px-4 py-2 mt-2 font-bold cursor-pointer bg-green-500 rounded text-white hover:bg-green-600 ease-out overflow-hidden transform md:hover:scale-x-105 md:hover:scale-y-100' onClick={handleCopyContent}>Copy</button>
    </div>
    
  );
};

export default ReadonlyEditor;
