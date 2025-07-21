import React from "react";

const TextInput = ({ name, placeholder, ref, err }) => {
    
  return (
    <div>
      
        <div className="flex items-center justify-center"> 
          <div className="flex gap-2 flex-col">
          <div className="font-semibold ">
              {name}
          </div>
            <div className="">
              <input
                className="border-black border-[1px] w-75 h-9 rounded-lg outline-none"
                type="text"
                placeholder={placeholder}
                ref={ref}
              />
            </div>
          </div>

        </div>
      </div>
    
  );
};

export default TextInput;
