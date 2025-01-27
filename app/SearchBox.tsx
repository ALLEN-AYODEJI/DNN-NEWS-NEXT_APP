"use clent";

import { useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");

  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm flex-1 placeholder-gray-500 
      text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />
      <button type="submit" disabled>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
