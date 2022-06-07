import { Heading } from "@react-meetup/ui-kit.typography.heading";
import React from "react";
import { Code } from "./components/code";
import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { Toolbar } from "./components/toolbar";
import { Text } from "./components/typography/text";

function App() {
  return (
    <div>
      <Toolbar title={"component-driven-development"} />
      <Hero
        title="I am the desktop app"
        subtitle="I use components from my repository"
      />

      <Container>
        <Text>
          You can edit components and publish them directly from this
          repository, without worrying about <strong>versioning</strong>,{" "}
          <strong>compiling</strong>, <strong>package.json</strong> etc...
        </Text>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Code>bit init</Code>

          <Code>{"bit add src/components/<your-component-name>"}</Code>

          <Code>bit tag</Code>

          <Code>bit status</Code>

          <Code>bit export</Code>

          <Code>bit link --rewire</Code>
        </div>
        <br />
        <br />
        <Heading level={2}>What's included?</Heading>
        <Text>
          <ul>
            <li>
              <strong>Component source-control</strong>: essentially, git for
              individual components.
            </li>
            <br />
            <li>
              <strong>Isolated component development</strong>: that includes
              isolated rendering, tests and builds.
            </li>
            <br />
            <li>
              <strong>Component dependency management</strong>: auto-generated
              component dependency graphs, and smart dependency management.
            </li>
          </ul>
        </Text>
      </Container>
    </div>
  );
}

export default App;
