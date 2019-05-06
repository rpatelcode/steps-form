import React, { Component } from "react";
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

export class Step2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  cancel = e => {};

  render() {
    const { values, handleChange } = this.props;
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
                id="form-input-control-occupation"
                control={Input}
                label="Occupation"
                placeholder="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
              />
              <Form.Field
                id="form-input-control-city"
                control={Input}
                label="City"
                placeholder="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
              />
            </Form.Group>
            <Form.Field
              id="form-input-control-bio"
              control={Input}
              label="Bio"
              placeholder="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />

            <Divider section />

            <Header as="h3" textAlign="left">
              Parent 2
            </Header>
          </Segment>
          <Button content="Cancel" onClick={this.cancel} secondary />
          <Button
            content="Back"
            icon="left arrow"
            labelPosition="left"
            onClick={this.back}
            primary
          />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            onClick={this.continue}
            primary
          />
        </Form>
      </Container>
    );
  }
}

export default Step2;
