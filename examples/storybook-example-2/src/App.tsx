import { useState } from 'react'
import './App.css'

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button style={{background: show ? "red" : "none"}}
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide
      </button>
      {show ? <h2>Surprise!!!</h2> : null}
    </div>
  );
}
