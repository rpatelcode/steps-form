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

const Step2 = props => {
  const continueGo = e => {
    e.preventDefault();
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
      <Steps stepNumber={2} />
      <Form>
        <Segment>
          <Header as="h3" textAlign="left">
            Parent 1
          </Header>

          <Form.Group widths="equal">
            <Form.Field
              id="Occupation"
              name="Occupation"
              control={Input}
              label="Occupation"
              placeholder="Occupation"
              // onChange={handleChange("occupation")}
              onChange={handleChange}
              defaultValue={values.occupation}
            />
            <Form.Field
              id="city"
              name="city"
              control={Input}
              label="City"
              placeholder="City"
              // onChange={handleChange("city")}
              onChange={handleChange}
              defaultValue={values.city}
            />
          </Form.Group>
          <Form.Field
            id="bio"
            name="bio"
            control={Input}
            label="Bio"
            placeholder="Bio"
            // onChange={handleChange("bio")}
            onChange={handleChange}
            defaultValue={values.bio}
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

export default Step2;
