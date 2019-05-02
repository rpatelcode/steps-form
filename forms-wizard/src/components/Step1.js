import React, { Component } from "react";
import { Button, Input, Container, Header, Step } from "semantic-ui-react";
import "../App.css";

export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Container style={{ marginTop: "3em" }}>
        <Header as="h1" content="Enter User Details" textAlign="center" />

        <Container>
          <Step.Group fluid>
            <Step
              icon="plane"
              title="Shipping"
              description="Choose your shipping options"
            />
            <Step
              active
              icon="dollar"
              title="Billing"
              description="Enter billing information"
            />
            <Step
              disabled
              icon="info circle"
              title="Confirm Order"
              description="Verify order details"
            />
          </Step.Group>
        </Container>

        <React.Fragment>
          <Input
            placeholder="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <Input
            placeholder="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <Input
            placeholder="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <Button
            primary
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </Container>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Step1;
