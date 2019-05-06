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
export class Step3 extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
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
        <Steps stepNumber={3} />
        <Form>
          <Segment>
            <Header as="h3" textAlign="left">
              Parent 1
            </Header>

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-text1"
                control={Input}
                label="text1"
                placeholder="text1"
                onChange={handleChange("text1")}
                defaultValue={values.text1}
              />
              <Form.Field
                id="form-input-control-text2"
                control={Input}
                label="text2"
                placeholder="text2"
                onChange={handleChange("text2")}
                defaultValue={values.text2}
              />
            </Form.Group>
            <Form.Field
              id="form-input-control-text3"
              control={Input}
              label="text3"
              placeholder="text3"
              onChange={handleChange("text3")}
              defaultValue={values.text3}
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

const styles = {
  button: {
    margin: 15
  }
};

export default Step3;
