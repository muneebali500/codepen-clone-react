import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className="websiteTitle">CodePen</h1>
      <p>Developed by Muneeb Ali to showcase his React skills</p>
      {/* <div className="headerBtns">
        <button onClick={() => saveToLocalStorage(data)}>Save</button>
        <button onClick={() => clearLocalStorage()}>Clear</button>
      </div> */}
    </header>
  );
}
