import React from "react";

export type ContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Container = (props: ContainerProps) => {
  return <div style={{ padding: 30, maxWidth: 900 }}>{props.children}</div>;
};
