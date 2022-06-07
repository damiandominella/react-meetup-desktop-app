import React from "react";

export type CodeProps = {
  children: React.ReactNode;
};

export const Code = (props: CodeProps) => {
  return (
    <code
      style={{
        background: "var(--primary-lighter)",
        color: "var(--primary-darker)",
        fontFamily: "'menlo', sans-serif",
        padding: "5px 20px",
        borderRadius: 10,
      }}
    >
      {props.children}
    </code>
  );
};
