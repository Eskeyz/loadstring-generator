import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Content = () => {
    //simple counter
  const [counter, setCounter] = useState(24);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-10">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold">Hello there 👋</h1>
            <p className="py-6">
              Starter Template React + TailwindCSS + daisyUI + Lucide Icon
            </p>
            <p className="my-2">Count : {counter}</p>
            <div className="flex gap-5 justify-center">
                <button className="btn btn-primary" onClick={handleClick1}>
                    <Plus size={20} />
                </button>
                <button className="btn btn-primary" onClick={handleClick2}>
                    <Minus size={20} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
