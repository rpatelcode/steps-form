import React from "react";
import {
  Button,
  Input,
  Container,
  Header,
  Form,
  Segment,
  Divider
} from "semantic-ui-react";
import Steps from "./Steps";
const Step3 = props => {
  const continueGo = e => {
    e.preventDefault();
    // PROCESS FORM //
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const cancel = e => {};

  const { values, handleChange } = props;
  return (
    <Container style={{ marginTop: "3em" }}>
      <Steps stepNumber={3} />
      <Form>
        <Segment>
          <Header as="h3" textAlign="left">
            Parent 1
          </Header>

          <Form.Group widths="equal">
            <Form.Field
              id="text1"
              name="text1"
              control={Input}
              label="text1"
              placeholder="text1"
              onChange={handleChange}
              defaultValue={values.text1}
            />
            <Form.Field
              id="text2"
              name="text2"
              control={Input}
              label="text2"
              placeholder="text2"
              onChange={handleChange}
              defaultValue={values.text2}
            />
          </Form.Group>
          <Form.Field
            id="text3"
            name="text3"
            control={Input}
            label="text3"
            placeholder="text3"
            onChange={handleChange}
            defaultValue={values.text3}
          />

          <Divider section />

          <Header as="h3" textAlign="left">
            Parent 2
          </Header>
        </Segment>
        <Button content="Cancel" onClick={cancel} secondary />
        <Button
          content="Back"
          icon="left arrow"
          labelPosition="left"
          onClick={back}
          primary
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={continueGo}
          primary
        />
      </Form>
    </Container>
  );
};

export default Step3;
