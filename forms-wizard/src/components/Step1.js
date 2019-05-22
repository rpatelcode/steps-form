import React from "react";
import {
  Form,
  Checkbox,
  Select,
  Message,
  Button,
  Input,
  Container
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
      <div>
        <Message
          attached
          header="General Information"
          content="Only couples planning to get married in the Province of Ontario can
          apply for a marriage licence through this website."
        />
        <Form
          className="attached fluid segment"
          onSubmit={handleSubmit}
          success
        >
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
              value={values.intendedPlace}
              required
              error={errors.intendedPlace ? true : false}
            />
            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Intended Date of Marriage</label>
              <SingleDatePicker
                id="proposedDate"
                numberOfMonths={1}
                // onDateChange={date => setDate(date)}
                onDateChange={date =>
                  handleChange({
                    name: "proposedDate",
                    value: date
                  })
                }
                // onDateChange={date => handleChange(date)}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                // date={date}
                date={values.proposedDate}
                isDayHighlighted={date => date} //Highlited today date
                isOutsideRange={() => false} // to pick all days
              />
            </Form.Field>
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
            />
          </Form.Group>

          {values.languageFlag === "french" ? <MessageShow /> : null}
          {Object.keys(errors).length === 0 ? null : (
            <Message
              header="Required"
              negative
              list={[
                errors.isOntarioMarriageFlag,
                errors.intendedPlace,
                errors.proposedDate
              ]}
            />
          )}
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
        <Message attached="bottom">
          The personal information contained on this form is collected under the
          authority of the Marriage Act, R.S.O. 1990, c. M. 3 and will be used
          to determine whether to issue the marriage licence, to register and
          record the marriage, provide certified copies, extracts, certificates,
          search notices, photocopies and for statistical, research, medical,
          law enforcement, adoption and adoption disclosure purposes. Questions
          about this collection should be directed to: Deputy Registrar General,
          P.O. Box 4600 189, Red River Road, Thunder Bay, ON P7B 6L8 or at
          1-800-461-2156 or 416-325-8305.
        </Message>
      </div>
    </Container>
  );
};

export default Step1;
