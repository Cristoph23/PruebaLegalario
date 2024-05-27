import React from "react";
interface ButtonProps {
  type?: "error" | "primary" | "second" | "default" | "cancel" | "success";
  outline?: boolean;
  [key: string]: any;
  typeButton?: "button" | "submit";
}
export default function Button({
  type = "default",
  outline = false,
  typeButton = "button",
  ...props
}: ButtonProps) {
  const BACKGROUND_COLOR: Record<string, { classStyle: string }> = {
    error: {
      classStyle: `${
        outline
          ? "border border-red-800 text-red-800 hover:bg-red-800 hover:text-white py-2 px-4"
          : "bg-red-800 hover:bg-red-900 py-2 px-4 text-white"
      }`,
    },
    primary: {
      classStyle: "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
    },
    second: {
      classStyle: "bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4",
    },
    success: {
      classStyle: `${
        outline
          ? "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 px-4"
          : "bg-green-500 hover:bg-green-600 py-2 px-4 text-white"
      }`,
    },
    default: {
      classStyle: `${
        outline
          ? "border border-violet-800 text-violet-800 hover:bg-violet-800 hover:text-white py-2 px-20 font-bold"
          : "bg-violet-800 hover:bg-violet-900 py-2 px-4 text-white"
      }`,
    },
    cancel: {
      classStyle: "bg-gray-500 hover:bg-gray-600 text-white py-2 px-4",
    },
  };
  return (
    <button
      className={`${BACKGROUND_COLOR[type].classStyle} rounded-md mt-2 w-full mx-1 disabled:opacity-50`}
      type={typeButton}
      {...props}
    >
      {props.children}
    </button>
  );
}
