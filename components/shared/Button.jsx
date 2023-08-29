import React from "react";

const Button = ({ text }) => {
  return (
    <p
      type="button"
      className={`py-2.5 text-sm rounded-md px-4 cursor-pointer bg-secondary-100 font-poppins  font-medium text-[16px] text-white outline-none `}
    >
      {text}
    </p>
  );
};

export default Button;
