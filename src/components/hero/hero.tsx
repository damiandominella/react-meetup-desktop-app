import React from "react";

export type HeroProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Hero = (props: HeroProps) => {
  return <div {...props}>{props.children}</div>;
};
