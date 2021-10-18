import { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor.jsx";

// function responds according to view port
function desktopOrMobileView(html, css, js, result) {
  return {
    html,
    css,
    js,
    result,
  };
}
/* ------------------------------------------- Start of Hero Section Component ------------------------------- */
/* =========================================================================================================== */
export default function Main() {
  const [html, setHtml] = useState(``);
  const [css, setCss] = useState(``);
  const [js, setJs] = useState(``);

  // sets view screen on MOBIEL VIEW depending upon the element clicked; whether html, css, js or result
  const [screen, setScreen] = useState({});

  // setting OUTPUT/RESULT by proving relative values to HTML Document
  const htmlDoc = `<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    <html>`;

  // getting data from local storage on 1st component mount
  useEffect(() => {
    const localData =
      JSON.parse(localStorage.getItem(`data`)) ||
      desktopOrMobileView(``, ``, ``);
    setHtml(localData.html);
    setCss(localData.css);
    setJs(localData.js);
  }, []);

  // getting window innerwidth to conditionally render visible modes on desktop view and mobile view
  const windowWidth = window.innerWidth;
  useEffect(() => {
    console.log(`use effect called`);

    windowWidth > 600
      ? setScreen(desktopOrMobileView(true, true, true, true)) // sets all screen visible in DESKTOP MODE
      : setScreen(desktopOrMobileView(true, false, false, false)); // sets only html screen visible in MOBILE MODE on initial render
  }, [windowWidth]);

  // function sets the screen to be visible in MOBILE VIEW despending upon the element clicked. i.e; if html element is clicked HTML screen will be visible and CSS screen will be visible when css element is clicked and so on...
  function handleClick(e) {
    const name = e.target.textContent;

    const newOutput = {
      html: name === `HTML` ? true : false,
      css: name === `CSS` ? true : false,
      js: name === `JS` ? true : false,
      result: name === `Result` ? true : false,
    };

    setScreen(newOutput);
  }

  // Function to save the data to local storage
  function saveToLocalStorage() {
    localStorage.setItem(`data`, JSON.stringify({ html, css, js }));
    alert(`Data is saved to local storage`);
  }

  // Function to clear the DOM and data from local storage
  function clearLocalStorage() {
    setHtml(``);
    setCss(``);
    setJs(``);
    localStorage.removeItem(`data`);
  }

  /* ------------------------------------------------ DOM AREA -------------------------------------------------- */
  return (
    <main>
      <button onClick={saveToLocalStorage}>Save</button>
      <button onClick={clearLocalStorage}>Clear</button>
      {/*-------------------------- Code Editor Title Wrapper (HTML/CSS/JS/RESULT) -------------------------------*/}
      {/* ======================================================================================================= */}

      <div className="editor__title-wrapper">
        <h3
          style={{ backgroundColor: screen.html ? `#292b31` : `black` }}
          className="editor-title"
          onClick={handleClick}
        >
          HTML
        </h3>
        <h3
          style={{ backgroundColor: screen.css ? `#292b31` : `black` }}
          className="editor-title"
          onClick={handleClick}
        >
          CSS
        </h3>
        <h3
          style={{ backgroundColor: screen.js ? `#292b31` : `black` }}
          className="editor-title"
          onClick={handleClick}
        >
          JS
        </h3>

        <h3
          style={{ backgroundColor: screen.result ? `#292b31` : `black` }}
          className="editor-title"
          onClick={handleClick}
        >
          Result
        </h3>
      </div>

      {/*--------------------------------- Code Area and Result Screen------------------------------------------*/}
      {/*=======================================================================================================*/}
      <section>
        {screen.html && (
          <CodeEditor mode="html" value={html} onChange={setHtml} />
        )}
        {screen.css && <CodeEditor mode="css" value={css} onChange={setCss} />}
        {screen.js && (
          <CodeEditor mode="javascript" value={js} onChange={setJs} />
        )}

        {screen.result && (
          <iframe srcDoc={htmlDoc} frameBorder="0" title="result" />
        )}
      </section>
    </main>
  );
}
