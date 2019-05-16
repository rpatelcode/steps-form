import React from "react";
import {
  Form,
  Checkbox,
  Select,
  Message,
  Button,
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
  const [message, setmessage] = React.useState(false);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    toggle,
    values,
    errors,
    isSubmitting
  } = props;

  // const errorLabel = <Label color="red" pointing />;
  const next = e => {
    e.preventDefault();
    props.nextStep();
  };

  // cancel button
  const cancel = e => {
    e.preventDefault();
    // this.setState({ ...this.state, step: 1 });
    console.log("Cancel Clicked");
  };
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

      <Form onSubmit={handleSubmit} success>
        <Segment>
          <Header as="h3" textAlign="left">
            Parent 1
          </Header>
          <Form.Group>
            <Form.Field
              id="isOntarioMarriageFlag"
              name="isOntarioMarriageFlag"
              onChange={toggle}
              // onBlur={handleBlur}
              control={Checkbox}
              checked={values.isOntarioMarriageFlag}
              required
              error={
                values.isOntarioMarriageFlag && errors.isOntarioMarriageFlag
                  ? false
                  : true
              }
              label={
                <label>
                  Confirm the intended place of marriage is in Ontario
                </label>
              }
            />
            <Form.Field
              id="homeAddressFlag"
              name="homeAddressFlag"
              onChange={toggle}
              // onBlur={handleBlur}
              control={Checkbox}
              checked={values.homeAddressFlag}
              required
              error={
                values.homeAddressFlag && errors.homeAddressFlag ? false : true
              }
              label={<label>homeAddressFlag</label>}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="City/Town"
              placeholder="City/Town"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.intendedPlace}
              required
              error={errors.intendedPlace ? true : false}
            />
            <Form.Field
              id="proposedDate"
              name="proposedDate"
              control={Input}
              label="Intended Date of Marriage"
              placeholder="DD/MM/YYYY"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.proposedDate}
              required
              error={errors.proposedDate ? true : false}
            />
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="Language for The Licence"
              placeholder="Choose an option"
              options={options}
              onChange={handleChange}
              onBlur={handleBlur}
              // value={"f"}
              // onChange={(e, { value }) => {
              //   value === "french" ? setmessage(true) : setmessage(false);
              //   handleChange("languageFlag");
              // }}
              required
              error={errors.languageFlag ? true : false}
            />
          </Form.Group>
          {message ? <MessageShow /> : null}
          <Message success header="Required" content="City/Town required" />

          <Divider section />

          <Header as="h3" textAlign="left">
            Parent 2
          </Header>
        </Segment>
        <Button content="Cancel" onClick={cancel} secondary />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={next}
          primary
          disabled={isSubmitting}
        />
      </Form>
    </Container>
  );
};

export default Step1;
