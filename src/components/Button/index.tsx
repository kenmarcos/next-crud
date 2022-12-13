import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md text-gray-200 hover:opacity-80 hover:scale-105 flex gap-1 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
