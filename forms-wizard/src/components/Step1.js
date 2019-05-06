import React, { useState } from "react";
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

const Step1 = props => {
  const [message, setmessage] = useState(false);
  const { values, handleChange } = props;

  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  // cancel button
  // cancel = e => {
  //   // this.setState({ ...this.state, step: 1 });
  //   console.log("Clicked");
  // };
  // MessageShow = (e, { value }) => {
  //   switch (value) {
  //     case "english":
  //       alert("english");
  //       break;
  //     case "french":
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const MessageShow = () => (
    <Message
      success
      header="Language for The Licence"
      content="This application does not provide for the translation of the web form but your marriage licence will be printed on the french version of the licence."
    />
  );

  return (
    <Container style={{ marginTop: "3em" }}>
      <Steps stepNumber={1} />
      <Form success>
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
              onChange={(e, { value }) => {
                // MessageShow(e, { value });
                value === "french" ? setmessage(true) : setmessage(false);
                handleChange("languageFlag");
              }}
              // onChange={(e, { value }) => alert(value)}
              defaultValue={values.languageFlag}
              required
            />
          </Form.Group>
          {message ? <MessageShow /> : null}

          {/* <Message
            success
            header="Language for The Licence"
            content="This application does not provide for the translation of the web form but your marriage licence will be printed on the french version of the licence."
          /> */}

          <Divider section />

          <Header as="h3" textAlign="left">
            Parent 2
          </Header>
        </Segment>
        <Button
          content="Cancel"
          // onClick={cancel}
          secondary
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          // onClick={continue}
          primary
        />
      </Form>
    </Container>
  );
};

export default Step1;
