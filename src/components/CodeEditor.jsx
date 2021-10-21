import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditor({ onChange, mode, value }) {
  function handleChange(value) {
    onChange(value);
  }

  return (
    <AceEditor
      mode={mode}
      theme="monokai"
      onChange={handleChange}
      value={value}
      showPrintMargin={true}
      showGutter={true}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        wrap: true,
        highlightActiveLine: false,
      }}
      className="editor"
    />
  );
}
