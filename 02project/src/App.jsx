import { useCallback, useState ,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [password, setpassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let password = "";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      chars += "0123456789";
    }
    if (symbols) {
      chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    }  
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setpassword(password);
  }, [length, numbers, symbols, setpassword]);
    useEffect(() => {PasswordGenerator()}, [PasswordGenerator, length, numbers, symbols]);


  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 100 );
    window.navigator.clipboard.writeText(password)
  },[password]);


  return (
      <div className="w-full max-w-md mx-auto shadow-md
       rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-orange-500"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>     
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='curesror-pointer'
            onChange={(e) => setlength(e.target.value)}
            />        
            <label> length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={numbers}
            id='NumberInput'
            onChange={(e) => setnumbers((prev) => !prev)}
            />
            <label> numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={symbols}
            id='SymbolsInput'
            onChange={(e) => setsymbols((prev) => !prev)}
            />
            <label>Symbols</label>
          </div>
          </div>
        </div>

        
  )
}

export default App
