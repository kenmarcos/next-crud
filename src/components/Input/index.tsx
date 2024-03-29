import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labeltext: string;
  icon?: ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <label className="text-purple-800">{props.labeltext}</label>
      <div
        className={`border ${
          !!props.error ? "border-red-500" : "border-purple-800"
        } rounded-md px-4 py-2 flex gap-2 text-purple-800 `}
      >
        {props.icon ?? null}
        <input
          {...props}
          ref={ref}
          className={`w-full focus:outline-none 
          placeholder:text-purple-400 ${props.className ?? ""}`}
        />
      </div>
      {!!props.error && <small className="text-red-400">{props.error}</small>}
    </>
  );
});

Input.displayName = "Input";

export default Input;
