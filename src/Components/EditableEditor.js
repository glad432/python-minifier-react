import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

const EditableEditor = ({ content, onContentChange, darkMode }) => {
  const [linesCount, setLinesCount] = useState(0);
  const [kbCount, setKbCount] = useState(0);

  const editorRef = useRef(null);

  const updateLinesCount = () => {
    if (editorRef.current) {
      const lineCount = editorRef.current.getModel().getLineCount();
      setLinesCount(lineCount);
    }
  };

  const updateKbCount = () => {
    const contentLength = content.length;
    const kbSize = (contentLength / 1024).toFixed(3);
    setKbCount(kbSize);
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    updateLinesCount();
    updateKbCount();
    editorRef.current.onDidChangeModelContent(() => {
      updateLinesCount();
      updateKbCount();
    });
  };

  useEffect(() => {
    updateLinesCount();
    updateKbCount();
  }, [content]);

  return (
    <div>
      <h2 className="select-none relative text-2xl font-bold mt-8 mb-5 text-white bg-black block rounded py-6 pl-[15px] blue_black_head">
        Original Code
      </h2>
      <div className="flex">
        <div className="select-none text-left mr-1 mb-2 font-bold px-4 py-2 bg-blue-500 rounded text-white max-w-[fit-content]">
          Lines: {linesCount}
        </div>
        <div className="select-none text-left mb-2 font-bold px-4 py-2 bg-blue-500 rounded text-white max-w-[fit-content]">
          {kbCount} Kb
        </div>
      </div>
      <Editor
        height="290px"
        width="auto"
        defaultLanguage="python"
        theme={darkMode ? "vs-dark" : "vs-light"}
        defaultValue=""
        value={content}
        options={{
          minimap: { enabled: false },
          matchBrackets: "always",
          fontFamily: "Source Code Pro",
          renderValidationDecorations: "on",
          scrollbar: { vertical: "visible", horizontal: "visible" },
          fontWeight: "bold",
          formatOnPaste: true,
          semanticHighlighting: true,
          folding: true,
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: true,
          cursorStyle: "line",
        }}
        onMount={handleEditorDidMount}
        onChange={onContentChange}
      />
    </div>
  );
};

export default EditableEditor;
