import React from "react";

export type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Card = (props: CardProps) => {
  return <div {...props}>{props.children}</div>;
};
