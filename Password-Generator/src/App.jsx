import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(10); // setting the length for password
  const [num, setNum] = useState(false); // include num
  const [char, setChar] = useState(false); // include character
  const [password, setPassword] = useState(""); // by default empty
  const refPassword = useRef(null); // copy password to clipboard

  const generator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const chars = "`~!@#$%^&*()_+-=<>,.?;:[{]}|";

    if (num) string += nums;
    if (char) string += chars;

    for (let i = 1; i <= length; i++) {
      let rn = Math.floor(Math.random() * string.length + 1);
      let char = string.charAt(rn);
      pass += char;
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  useEffect(() => {
    generator();
  }, [length, num, char, generator]);

  const copyPassword = useCallback(() => {
    refPassword.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className=" w-full m-auto h-48 max-w-lg my-14 rounded-md bg-gray-300 overflow-hidden">
      <h1 className=" text-3xl font-semibold text-center font-mono bg-slate-400">Password Generator</h1>
      <div className=" mx-8 my-8 rounded-md overflow-hidden shadow-md flex">
        <input
          type="text"
          className=" w-full h-9 outline-none p-4"
          value={password}
          placeholder="Your Password"
          readOnly
          ref={refPassword}
        />
        <button className=" bg-zinc-700 text-white font-semibold px-2 hover:bg-zinc-800"
          onClick={copyPassword}>Copy</button>
      </div>

      <div className=" flex justify-center w-full">
        <div className="flex items-center mx-2">
          <input
            type="range"
            min={10}
            max={25}
            value={length}
            onChange={e => { setLength(e.target.value) }}
            className=" gap-4 cursor-pointer"
          />
          <label className=" font-bold mx-2 text-slate-700 text-xl">Length : {length}</label>
        </div>

        <div flex items-center mx-2>
          <input
            type="checkbox"
            defaultChecked={num}
            onChange={() => { setNum(prev => !prev) }}
          />
          <label className="font-bold mx-2 text-slate-700 text-xl">Numeric</label>
        </div>
        <div flex items-center mx-2>
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => { setChar(prev => !prev) }}
          />
          <label className="font-bold mx-2 text-slate-700 text-xl">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
