import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full text-black shadow-lg flex flex-wrap" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
        <button className="px-4 py-2 rounded-full text-black shadow-lg flex flex-wrap" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
        <button className="px-4 py-2 rounded-full text-black shadow-lg flex flex-wrap" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
        <button className="px-4 py-2 rounded-full text-black shadow-lg flex flex-wrap" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>

      </div>
    </div>
  );
}

export default App;
