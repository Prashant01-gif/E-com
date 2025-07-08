import React from "react";

const Button = ({ title, ...props }) => {
  return (
    <div>
      <button
        className="
          flex h-10 px-4 justify-center items-center border border-red-700 rounded-xl mt-1 bg-red-700 text-white ml-4 md:ml-40 hover:bg-red-800 *
          transition-colors  duration-300  min-w-[80px] text-sm md:text-base"
        {...props}>{title}
      </button>
    </div>
  );
};

export default Button;
