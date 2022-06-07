import { Heading } from "@react-meetup/ui-kit.typography.heading";
import React from "react";

export type ToolbarProps = {
  title: string;
};

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "var(--primary-darker)",
        color: "var(--text-on-primary-darker)",
        height: 50,
      }}
    >
      <Heading level={3} style={{ marginBottom: 0 }}>
        {props.title}
      </Heading>
    </div>
  );
};
