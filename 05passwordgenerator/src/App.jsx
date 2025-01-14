import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 3985345!@#$%"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&()"
    for (let i = 1; i < str.length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed])
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }
  return (
    <div
      className="w-full max-w-md max-h-screen shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 text-center"
    >
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
            id="length"
          />
          <label htmlFor="length"> Length: {length} </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name="number"
            id="number"
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=" "
            id=" "
          />
          <label htmlFor="charInput">charInput</label>
        </div>


      </div>
    </div>
  );
}

export default App;