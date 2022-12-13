import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labeltext: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <label className="text-purple-800">{props.labeltext}</label>
      <div className="border border-purple-800 rounded-md px-4 py-2">
        <input
          {...props}
          className={`w-full focus:outline-none text-purple-800 placeholder:text-purple-400 ${props.className}`}
        />
      </div>
    </>
  );
};

export default Input;
