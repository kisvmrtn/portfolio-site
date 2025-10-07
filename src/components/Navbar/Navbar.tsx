import { FiDownload } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const appRoot = document.getElementById("app-root");
    isLight
      ? appRoot?.classList.add("light")
      : appRoot?.classList.remove("light");
  }, [isLight]);

  return (
    <nav className="light:text-stone-900 text-purple-400 w-full py-4 px-6 flex justify-between items-center bg-transparent">
      <div className="flex-1 flex justify-center space-x-6">
        {["Projects", "Skills", "Contact"].map((text) => (
          <a
            key={text}
            href={`#${text.toLowerCase()}`}
            className="group px-3 py-2 font-medium cursor-pointer"
          >
            <span className="relative inline-block">
              {text}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4 ">
        <button className="flex items-center space-x-2 font-medium hover:text-purple-300 light:hover:text-neutral-600 cursor-pointer">
          <FiDownload className="w-5 h-5" />
        </button>

        <button
          className="flex items-center space-x-2 font-medium hover:text-purple-300 light:hover:text-neutral-600 cursor-pointer"
          onClick={() => setIsLight(!isLight)}
        >
          {isLight ? (
            <BsMoon className="w-5 h-5" />
          ) : (
            <BsSun className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
