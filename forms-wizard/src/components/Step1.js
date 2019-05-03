import React, { Component } from "react";
import {
  Form,
  Grid,
  Button,
  Input,
  Container,
  Divider,
  Header,
  Segment,
  Step
} from "semantic-ui-react";
import "../App.css";
import Steps from "./Steps";
// import Form from "./Form";

export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  // cancel button
  cancel = e => {};

  render() {
    const { values, handleChange } = this.props;

    return (
      <Container style={{ marginTop: "3em" }}>
        <Steps />
        <Form>
          <Segment>
            <Header as="h3" textAlign="left">
              Parent 1
            </Header>

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={Input}
              label="eMail"
              placeholder="eMail"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />

            <Divider section />

            <Header as="h3" textAlign="left">
              Parent 2
            </Header>
          </Segment>
          <Button content="Cancel" onClick={this.cancel} secondary />
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

export default Step1;
