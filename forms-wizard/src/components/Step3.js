import React, { Component } from "react";
import {
  List,
  Button,
  Input,
  Container,
  Header,
  Step
} from "semantic-ui-react";
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

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <List>
          <List.Item>
            <List.Header>First Name</List.Header>
            {firstName}
          </List.Item>
          <List.Item>
            <List.Header>Last Name</List.Header> {lastName}
          </List.Item>
          <List.Item>
            <List.Header>Email</List.Header> {email}
          </List.Item>
          <List.Item>
            <List.Header>Occupation</List.Header> {occupation}
          </List.Item>
          <List.Item>
            <List.Header>City</List.Header> {city}
          </List.Item>
          <List.Item>
            <List.Header>Bio</List.Header> {bio}
          </List.Item>
        </List>
        <br />
        <Button
          label="Confirm & Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
        <Button
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
        />
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Step3;
