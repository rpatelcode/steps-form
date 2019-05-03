import React from "react";
import { Header, Container, Step } from "semantic-ui-react";
const Steps = () => {
  return (
    <>
      <Header
        as="h1"
        content="Online Marriage Licence Application"
        textAlign="center"
      />
      <Container style={{ marginBottom: "2em" }}>
        <Step.Group fluid>
          <Step title="Step 1" />
          <Step active title="Step 2" />
          <Step disabled title="Step 3" />
          <Step disabled title="Step 4" />
        </Step.Group>
      </Container>
    </>
  );
};

export default Steps;
