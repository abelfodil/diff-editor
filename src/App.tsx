import React from "react";
import Editor from "./Editor";
import { loadDiffContentFromBucket, loadDiffContentFromLocalStorage } from "./DiffContent";

const App = () => {
  const id = new URLSearchParams(window.location.search).get('id') || '';
  return (
    <div>
      <Editor diffContent={loadDiffContentFromBucket(id) || loadDiffContentFromLocalStorage()} />
    </div>
  );
};

export default App;
