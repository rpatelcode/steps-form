import React, { useEffect } from "react";
import {
  Form,
  Checkbox,
  Select,
  Message,
  Button,
  Icon,
  Input,
  Container
} from "semantic-ui-react";
// import { DateInput } from "semantic-ui-calendar-react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import useForm from "react-hook-form";
import "../App.css";
import "./css/_datepicker.css";

import Steps from "./Steps";
const options = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" }
];

const Step1 = props => {
  useEffect(() => {
    register({ name: "isOntarioMarriageFlag" }, { required: true });
    register({ name: "intendedPlace" }, { required: true });
    register({ name: "proposedDate" }, { required: true });
    register({ name: "languageFlag" }, { required: true });
  }, []);
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    getValues,
    triggerValidation,
    formState
  } = useForm({ mode: "onChange" });
  const onSubmit = (data, e) => {
    e.preventDefault();
    // props.nextStep();
    console.log("Submit event", e);
    alert(JSON.stringify(data));
  };

  console.log(errors);
  console.log(getValues());
  console.log("Dirty" + formState.dirty);

  // const [message, setmessage] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  // const [date, setDate] = React.useState(moment());

  const {
    // handleChange,
    // handleBlur,
    // values
    // errors
    // isSubmitting
  } = props;

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
      content="This application does not provide for the translation of the web form but your licence will be printed on the french version of the licence."
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
          onSubmit={handleSubmit(onSubmit)}
          success
        >
          <Form.Group>
            <Form.Field
              id="isOntarioMarriageFlag"
              name="isOntarioMarriageFlag"
              control={Checkbox}
              onChange={async (e, { name, checked }) => {
                setValue(name, checked);
                await triggerValidation({ name });
              }}
              checked={getValues().isOntarioMarriageFlag}
              required
              error={errors.isOntarioMarriageFlag ? true : false}
              label={
                <label>
                  Confirm the intended place of marriage is in Ontario
                </label>
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="City/Town"
              placeholder="City/Town"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              // onChange={e =>
              //   handleChange({
              //     name: "intendedPlace",
              //     value: e.target.value
              //   })
              // }

              // value={getValues().intendedPlace}
              required
              error={errors.intendedPlace ? true : false}
            />
            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Intended Date of Marriage</label>
              <Icon name="calendar alternate outline" size="large" />
              <SingleDatePicker
                id="proposedDate"
                numberOfMonths={1}
                // onDateChange={async (e, { name, date }) => {
                //   setValue(name, date);
                //   await triggerValidation({ name });
                // }}
                // onDateChange={date => setDate(date)}
                onDateChange={async date => {
                  let name = "proposedDate";
                  setValue(name, date);
                  await triggerValidation({ name });
                }}
                // onDateChange={date =>
                //   handleChange({
                //     name: "proposedDate",
                //     value: date
                //   })
                // }
                // onDateChange={date => handleChange(date)}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                // date={date}
                date={getValues().proposedDate}
                // isDayHighlighted={date => date} //Highlited today date
                isOutsideRange={() => false} // to pick all days
              />
            </Form.Field>
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="Language for The Licence"
              options={options}
              placeholder={getValues().languageFlag}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              // onChange={(e, { value }) =>
              //   handleChange({
              //     name: "languageFlag",
              //     value: value
              //   })
              // }
            />
          </Form.Group>

          {getValues().languageFlag === "french" ? <MessageShow /> : null}
          {/* {Object.keys(errors).length === 0 ? null : (
            <Message
              header="Required"
              negative
              list={[
                errors.isOntarioMarriageFlag,
                errors.intendedPlace,
                errors.proposedDate
              ]}
            />
          )} */}
          <Button content="Cancel" onClick={cancel} secondary />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            primary
            disabled={
              !formState.dirty || (formState.dirty && !formState.isValid)
            }
          />
        </Form>
        <Message attached="bottom">
          The personal information contained on this form is collected under the
          authority of and will be used to determine whether to issue the, to
          register and record the provide certified copies, extracts,
          certificates, search notices, photocopies and for statistical,
          research, medical, adoption and adoption disclosure purposes.
          Questions about this collection should be directed to: Deputy
          Registrar General, P.O. Box 46900 1899, Red River Road, Thunder Bay,
          ON P7B 6L8 or at 1-8090-4691-21956 or 416-3295-83905.
        </Message>
      </div>
    </Container>
  );
};

export default Step1;
