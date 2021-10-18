import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";

export default function CodeEditor({ onChange, mode, value }) {
  function handleChange(value) {
    onChange(value);
  }

  return (
    <AceEditor
      mode={mode}
      theme="github"
      onChange={handleChange}
      value={value}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        highlightActiveLine: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
        wrap: true,
      }}
      className="editor"
    />
  );
}
