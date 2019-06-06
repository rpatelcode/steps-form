import React from "react";
import {
  Button,
  Input,
  Icon,
  Header,
  Divider,
  Select,
  Container,
  Tab,
  Form,
  Message
} from "semantic-ui-react";
import Steps from "./Steps";
import SingleName from "./SingleName";
import Parent from "./Parent";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import SelectCountry from "./SelectCountry";
import SelectReligion from "./SelectReligion";
import "./css/_datepicker.css";

const options = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" }
];

const Step2 = props => {
  const [focused, setFocused] = React.useState(false);
  const { handleSubmit, handleChange, values, errors, isSubmitting } = props;
  const tabs = [
    {
      menuItem: "Parent 1",
      render: () => (
        <Tab.Pane>
          <Parent
            id={"Father"} // Father, Mother, Parent3, Parent4
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Parent 2",
      render: () => (
        <Tab.Pane>
          <Parent
            id={"Mother"} // Father, Mother, Parent3, Parent4
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Parent 3",
      render: () => (
        <Tab.Pane>
          <Parent
            id={"Parent3"} // Father, Mother, Parent3, Parent4
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Parent 4",
      render: () => (
        <Tab.Pane>
          <Parent
            id={"Parent4"} // Father, Mother, Parent3, Parent4
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Tab.Pane>
      )
    }
  ];
  const continueGo = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const cancel = e => {};
  return (
    <Container style={{ marginTop: "3em" }}>
      <Steps stepNumber={2} />
      <div>
        <Message
          attached
          header="Applicant's Information"
          content="This application does not provide for the translation of the web form but your licence will be printed on the french version of the licence."
        />
        <Form
          className="attached fluid segment"
          onSubmit={handleSubmit}
          success
        >
          <Form.Group>
            <SingleName
              txt={""} // "" for Applicant,Father, Mother, Parent3, Parent4
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Date of Birth</label>
              <Icon name="calendar alternate outline" size="large" />
              <SingleDatePicker
                id="proposedDate"
                numberOfMonths={1}
                onDateChange={date =>
                  handleChange({
                    name: "proposedDate",
                    value: date
                  })
                }
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                date={values.proposedDate}
                isOutsideRange={() => false} // to pick all days
              />
            </Form.Field>
            <Form.Field
              id="app1Age"
              name="app1Age"
              control={Input}
              label="Age"
              readOnly
              value={
                Math.floor(
                  moment(new Date()).diff(
                    moment(values.proposedDate),
                    "years",
                    true
                  )
                ) + " Years"
              }
            />
          </Form.Group>
          <Form.Group inline>
            <label>Marital Status</label>
            <Form.Radio
              label="Never Married"
              value="never"
              checked={values.app1MaritalStatus === "never"}
              onChange={e =>
                handleChange({
                  name: "app1MaritalStatus",
                  value: "never"
                })
              }
            />
            <Form.Radio
              label="Widowed"
              value="widowed"
              checked={values.app1MaritalStatus === "widowed"}
              onChange={e =>
                handleChange({
                  name: "app1MaritalStatus",
                  value: "widowed"
                })
              }
            />
            <Form.Radio
              label="Divorced in Canada"
              value="divorced"
              checked={values.app1MaritalStatus === "divorced"}
              onChange={e =>
                handleChange({
                  name: "app1MaritalStatus",
                  value: "divorced"
                })
              }
            />
            <Form.Radio
              label="Divorced outside Canada"
              value="divorcedOutside"
              checked={values.app1MaritalStatus === "divorcedOutside"}
              onChange={e =>
                handleChange({
                  name: "app1MaritalStatus",
                  value: "divorcedOutside"
                })
              }
            />
          </Form.Group>
          <SelectReligion
            id={"app1Religion"} // app1Religion, app2Religion
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
          <SelectCountry
            id={""} // "" for Applicant,Father, Mother, Parent3, Parent4
            handleChange={handleChange}
            values={values}
            errors={errors}
          />

          <Tab panes={tabs} />
          <Form.Group />
          <Button content="Cancel" onClick={cancel} secondary />
          <Button
            content="Back"
            icon="left arrow"
            labelPosition="left"
            onClick={back}
            primary
          />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            onClick={continueGo}
            primary
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

export default Step2;
