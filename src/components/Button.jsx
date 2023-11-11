import React from "react";
import classNames from "classnames";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        "rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
