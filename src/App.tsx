import React from "react";
import { Hero } from "./components/hero";
import { Toolbar } from "./components/toolbar";
import { Heading } from "./components/typography/heading";
import { Text } from "./components/typography/text";

function App() {
  return (
    <div>
      <Toolbar />
      <Hero />

      <Heading>I am the desktop app</Heading>
      <Heading level={3}>
        I have components source code in my repository
      </Heading>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ex placeat
        cupiditate exercitationem amet recusandae culpa suscipit consequuntur.
        Explicabo facilis voluptate, ut temporibus accusantium enim? Numquam
        facilis est cumque nihil?
      </Text>
    </div>
  );
}

export default App;
