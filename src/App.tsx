import React from "react";
import Editor from "./Editor";
import { loadDiffContent } from "./DiffContent";

const App = () => {
  const id = new URLSearchParams(window.location.search).get('id') || '';
  return (
    <div>
      <Editor diffContent={loadDiffContent(id)} />
    </div>
  );
};

export default App;
