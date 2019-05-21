import React from "react";
import {
  Form,
  Checkbox,
  Select,
  Message,
  Button,
  Input,
  Container,
  Header,
  Segment
} from "semantic-ui-react";
// import { DateInput } from "semantic-ui-calendar-react";
import "../App.css";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "./css/_datepicker.css";

import Steps from "./Steps";
const options = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" }
];

const Step1 = props => {
  // const [message, setmessage] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  // const [date, setDate] = React.useState(moment());
  const {
    handleSubmit,
    handleChange,
    // handleBlur,
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
  console.log("isSubmitting : " + isSubmitting);
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
              control={Checkbox}
              onChange={e =>
                handleChange({
                  name: "isOntarioMarriageFlag",
                  value: e.target.checked
                })
              }
              checked={values.isOntarioMarriageFlag}
              required
              error={errors.isOntarioMarriageFlag ? true : false}
              label={
                <label>
                  Confirm the intended place of marriage is in Ontario
                </label>
              }
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="City/Town"
              placeholder="City/Town"
              onChange={e =>
                handleChange({
                  name: "intendedPlace",
                  value: e.target.value
                })
              }
              // onBlur={handleBlur}
              value={values.intendedPlace}
              required
              error={errors.intendedPlace ? true : false}
            />
            {/* <Form.Field
              id="proposedDate"
              name="proposedDate"
              control={Input}
              label="Intended Date of Marriage"
              placeholder="DD/MM/YYYY"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.proposedDate}
              required
              error={errors.proposedDate ? true : false}
              {...<Datepicker />}
            /> */}{" "}
            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Intended Date of Marriage</label>
              <SingleDatePicker
                id="proposedDate"
                numberOfMonths={1}
                // onDateChange={date => setDate(date)}
                onDateChange={date =>
                  handleChange({ name: "proposedDate", value: date })
                }
                // onDateChange={date => handleChange(date)}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                // date={date}
                date={values.proposedDate}
              />
            </Form.Field>
            {/* <DateInput
              name="proposedDate"
              placeholder="Date"
              label="proposedDate"
              value={values.proposedDate}
              iconPosition="left"
              onChange={handleChange}
            /> */}
            {/* <Form.Field
              id="proposedDate"
              name="proposedDate"
              control={Input}
              label="Intended Date of Marriage"
              placeholder="DD/MM/YYYY"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.proposedDate}
              required
              error={errors.proposedDate ? true : false}
            /> */}
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="Language for The Licence"
              options={options}
              // selection={values.languageFlag}
              placeholder={values.languageFlag}
              onChange={(e, { value }) =>
                handleChange({
                  name: "languageFlag",
                  value: value
                })
              }
              required
              error={errors.languageFlag ? true : false}
            />
            {/* <Form.Field>
              <label>Language for The Licence</label>
              <Dropdown
                selection
                name="languageFlag"
                options={options}
                placeholder="English"
                onChange={handleChange}
              />
            </Form.Field> */}
          </Form.Group>

          {values.languageFlag === "french" ? <MessageShow /> : null}
          {Object.keys(errors).length === 0 ? null : (
            <Message
              header="Required"
              negative
              // content={JSON.stringify(errors, null, 4)}
              // content={JSON.stringify(errors)}
              list={[
                errors.isOntarioMarriageFlag,
                errors.intendedPlace,
                errors.proposedDate
              ]}
            />
          )}
        </Segment>
        <Button content="Cancel" onClick={cancel} secondary />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={next}
          primary
          disabled={isSubmitting}
          // disabled={values.isOntarioMarriageFlag ? isSubmitting : true}
        />
      </Form>
    </Container>
  );
};

export default Step1;
