import { Heading } from "@react-meetup/ui-kit.typography.heading";
import React from "react";
import { Container } from "../container";

export type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero = (props: HeroProps) => {
  return (
    <div
      style={{
        backgroundColor: "var(--primary-dark)",
        color: "var(--primary-lighter)",
      }}
    >
      <Container>
        <Heading style={{ fontSize: 50 }}>{props.title}</Heading>
        <Heading level={2}>{props.subtitle}</Heading>
      </Container>
    </div>
  );
};
