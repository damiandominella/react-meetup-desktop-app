import React from "react";

export type ToolbarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Toolbar = (props: ToolbarProps) => {
  return <div {...props}>{props.children}</div>;
};
