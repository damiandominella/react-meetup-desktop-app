import React from "react";

export type ButtonProps = {} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};
