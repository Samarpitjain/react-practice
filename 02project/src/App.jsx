import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [copied, setcopied] = useState(false);
  const [password, setpassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      chars += "0123456789";
    }
    if (symbols) {
      chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    }  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length + 1));
    }
    setpassword(password);
  }, [length, numbers, symbols, setpassword]);


  return (
    <>
        <div className=" w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 my-8 text-orange-500 bg-gray-800" >test</div>
    </>
  )
}

export default App
