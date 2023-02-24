import { useState } from 'react';

function Navbar(props) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="bg-red-600 h-20  flex justify-between items-center">
      <div className="font-sans font-extrabold text-4xl ml-5 text-white animate-bounce">
        Youtube
      </div>
      <div className="font-semibold mr-5 flex justify-center items-center gap-3">
        <input
          placeholder="Search........"
          className="pl-2 w-40 h-8 border border-black rounded-lg"
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button onClick={() => props.searchVideo(searchInput)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
