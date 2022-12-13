import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`font-semibold px-4 py-2 rounded-md text-gray-200 hover:opacity-80 hover:scale-105 flex gap-1 ${props.className}`}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
