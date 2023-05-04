import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const newOutputValue = inputValue.replace(/,/g, ",\n");
    setOutputValue(newOutputValue);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Vamo trollar os angolano
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Manda os números aqui pae"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 text-gray-800 focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Tirar as Virgulas
        </button>
        <textarea
          value={outputValue}
          readOnly
          className="w-full border border-gray-300 rounded-md py-2 px-3 mt-4 text-gray-800 focus:outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
}

export default App;