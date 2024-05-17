import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const ReadonlyEditor = ({ content, darkMode }) => {
  const [linesCount, setLinesCount] = useState(0);
  const Minifiededitor = useRef(null);

  const updateLinesCount = () => {
    if (Minifiededitor.current) {
      const lineCount = Minifiededitor.current.getModel().getLineCount();
      setLinesCount(lineCount);
    }
  };

  const handleEditorDidMount = (editor) => {
    Minifiededitor.current = editor;
    editor.updateOptions({ readOnly: true });
    updateLinesCount();
    editor.onDidChangeModelContent(updateLinesCount);
  };

  const text_size = (content.length / 1024).toFixed(3);

  const DownloadPythonFile = () => {
    var dwcontent = Minifiededitor.current.getModel().getValue();
    if (dwcontent.length !== 0) {
      var blob = new Blob([dwcontent], {
        type: "text/x-python",
      });
      var dataUri = URL.createObjectURL(blob);
      var downloadLink = document.createElement("a");
      downloadLink.href = dataUri;
      downloadLink.download =
        "default.py".trim().replace(/\.[^/.]+$/, "") + "_min.py";
      downloadLink.click();
      URL.revokeObjectURL(dataUri);
    }
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
        endColumn: Minifiededitor.current
          .getModel()
          .getLineMaxColumn(lastLineNumber),
      });
    }
  };

  const handleDownload = () => {
    DownloadPythonFile();
  };

  return (
    <div>
      <h2 className="select-none relative text-2xl font-bold mt-8 mb-5 text-white bg-black block rounded py-6 pl-[15px] red_black_head">
        Minified Code
      </h2>
      <div className="flex">
        <div className="select-none text-left mr-1 mb-2 font-bold px-4 py-2 bg-red-500 rounded text-white max-w-[fit-content]">
          Lines: {linesCount}
        </div>
        <div className="select-none text-left mb-2 font-bold px-4 py-2 bg-red-500 rounded text-white max-w-[fit-content]">
          {text_size} Kb
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
      />
      <div className="mb-2 md:mb-4 select-none">
        <button
          className="px-4 py-2 mt-2 mr-2 font-bold cursor-pointer bg-green-500 rounded text-white hover:bg-green-600 ease-out overflow-hidden transform md:hover:scale-x-105 md:hover:scale-y-100"
          onClick={handleCopyContent}
        >
          Copy
        </button>
        <button
          className="px-4 py-2 mt-2 font-bold cursor-pointer bg-blue-500 rounded text-white hover:bg-blue-600 ease-out overflow-hidden transform md:hover:scale-x-105 md:hover:scale-y-100"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ReadonlyEditor;
