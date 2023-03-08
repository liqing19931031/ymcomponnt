import React from "react";
import ReactDOM from "react-dom/client"
import YmButton from '@/components/YmButton/index.js';
import YmInput from '@/components/YmInput/index.js';

function App() {
  return (<div>
    <YmButton />
    <YmInput />
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App></App>)
