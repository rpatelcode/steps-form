import React from "react";
import { Header, Container, Step } from "semantic-ui-react";

const Steps = props => {
  const StepChoose = () => {
    switch (props.stepNumber) {
      case 1:
        return (
          <Step.Group fluid>
            <Step active title="Step 1" />
            <Step disabled title="Step 2" />
            <Step disabled title="Step 3" />
            <Step disabled title="Step 4" />
          </Step.Group>
        );
      case 2:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step active title="Step 2" />
            <Step disabled title="Step 3" />
            <Step disabled title="Step 4" />
          </Step.Group>
        );
      case 3:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step active title="Step 3" />
            <Step disabled title="Step 4" />
          </Step.Group>
        );
      case 4:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step active title="Step 4" />
          </Step.Group>
        );
      default:
        return <></>;
        break;
    }
  };

  return (
    <>
      <Header as="h1" content="Online Lorem Application" textAlign="center" />
      <Container style={{ marginBottom: "2em" }}>
        <StepChoose />
      </Container>
    </>
  );
};

export default Steps;
