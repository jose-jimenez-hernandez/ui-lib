import React from "react";
import "./button.css";
import "../../styles/tailwind.css";

export interface ButtonProps {
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  type?: any;
  children?: any;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, disabled, backgroundColor } = props;
  return (
    <>
      <button
        type={props.type || "button"}
        className={`inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold ${
          disabled
            ? "text-settle-gray-300 bg-settle-gray-50 hover:bg-settle-gray-50 focus:ring-gray-500 cursor-default pointer-events-none"
            : "text-white bg-settle-blue-500 hover:bg-settle-blue-600  focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
        } select-none ${className}`}
        onClick={props.onClick}
        style={backgroundColor ? { backgroundColor } : {}}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
