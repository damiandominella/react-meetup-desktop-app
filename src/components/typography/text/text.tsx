import React from "react";

export type TextProps = {} & React.HTMLAttributes<HTMLParagraphElement>;

export const Text = (props: TextProps) => {
  return <p {...props}>{props.children}</p>;
};
