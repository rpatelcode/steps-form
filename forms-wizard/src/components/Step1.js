import React from "react";
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
    register,
    handleSubmit,
    // handleChange,
    // handleBlur,
    values,
    errors
    // isSubmitting
  } = props;

  const onSubmit = (e, data) => {
    e.preventDefault();
    props.nextStep();
    console.log(data);
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
          // onSubmit={handleSubmit}

          success
        >
          <Form.Group>
            <Form.Field
              id="isOntarioMarriageFlag"
              name="isOntarioMarriageFlag"
              control={Checkbox}
              // onChange={e =>
              //   handleChange({
              //     name: "isOntarioMarriageFlag",
              //     value: e.target.checked
              //   })
              // }
              ref={register}
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

          <Form.Group>
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="City/Town"
              placeholder="City/Town"
              // onChange={e =>
              //   handleChange({
              //     name: "intendedPlace",
              //     value: e.target.value
              //   })
              // }
              ref={register}
              value={values.intendedPlace}
              required
              error={errors.intendedPlace ? true : false}
            />
            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Intended Date of Marriage</label>
              <Icon name="calendar alternate outline" size="large" />
              <SingleDatePicker
                id="proposedDate"
                numberOfMonths={1}
                // onDateChange={date => setDate(date)}
                // onDateChange={date =>
                //   handleChange({
                //     name: "proposedDate",
                //     value: date
                //   })
                // }
                ref={register}
                // onDateChange={date => handleChange(date)}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                // date={date}
                date={values.proposedDate}
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
              placeholder={values.languageFlag}
              // onChange={(e, { value }) =>
              //   handleChange({
              //     name: "languageFlag",
              //     value: value
              //   })
              // }
              ref={register}
            />
          </Form.Group>

          {values.languageFlag === "french" ? <MessageShow /> : null}
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
            onClick={handleSubmit(onSubmit)}
            primary
            // disabled={isSubmitting}
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
