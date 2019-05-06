import React, { Component } from "react";
import {
  Form,
  Checkbox,
  Select,
  Message,
  Button,
  Icon,
  Modal,
  Input,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import "../App.css";
import Steps from "./Steps";

const options = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" }
];

export class Step1 extends Component {
  // state = { languageFlag: '' };

  // handleOpen = e => {
  //   console.log(e.target.value);
  //   this.setState({ modalOpen: true });
  // };

  // handleClose = () => this.setState({ languageFlag: '' });

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  // cancel button
  cancel = e => {
    // this.setState({ ...this.state, step: 1 });
    console.log("Clicked");
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Container style={{ marginTop: "3em" }}>
        <Steps stepNumber={1} />
        <Form onSubmit={this.handleSubmit} success>
          <Segment>
            <Header as="h3" textAlign="left">
              Parent 1
            </Header>
            <Form.Field>
              <Form.Field
                control={Checkbox}
                required
                label={
                  <label>
                    Confirm the intended place of marriage is in Ontario
                  </label>
                }
              />
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Field
                id={values.intendedPlace}
                control={Input}
                label="City/Town"
                placeholder="City/Town"
                onChange={handleChange("intendedPlace")}
                defaultValue={values.intendedPlace}
                required
              />
              <Form.Field
                id={values.proposedDate}
                control={Input}
                label="Intended Date of Marriage"
                placeholder="DD/MM/YYYY"
                onChange={handleChange("proposedDate")}
                defaultValue={values.proposedDate}
                required
              />
              <Form.Field
                id={values.languageFlag}
                control={Select}
                label="Language for The Licence"
                placeholder="Choose an option"
                options={options}
                onChange={handleChange("languageFlag")}
                // onChange={(e, { value }) => alert(value)}
                defaultValue={values.languageFlag}
                required
              />
            </Form.Group>
            <Message
              success
              header="Language for The Licence"
              content="This application does not provide for the translation of the web form but your marriage licence will be printed on the french version of the licence."
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
