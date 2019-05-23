import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Icon,
  Select,
  Container,
  Header,
  Form,
  Message,
  Divider
} from "semantic-ui-react";
import Steps from "./Steps";
import { SingleDatePicker } from "react-dates";
import "./css/_datepicker.css";

const options = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" }
];

const Step2 = props => {
  const [focused, setFocused] = React.useState(false);
  const {
    handleSubmit,
    handleChange,
    // handleBlur,
    values,
    errors,
    isSubmitting
  } = props;

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
                  Please check this box if Last Name and First and Middle Name
                  do not apply to the applicant because they have either a
                  registered Birth Certificate or Change of Name Certificate
                  bearing a Single Name
                </label>
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Last Name"
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
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="First and Middle Name:"
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
              placeholder="Age"
              onChange={e =>
                handleChange({
                  name: "app1Age",
                  value: e.target.value
                })
              }
              value={values.app1Age}
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
                  value: e.target.checked
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
                  value: e.target.checked
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
                  value: e.target.checked
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
                  value: e.target.checked
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="If the religion is not listed, please select 'Not Listed' and type the religion name in the box below"
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
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Or Type"
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
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="If the country is not listed, please select 'Not Listed' and type the country name in the box below"
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
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Or Type"
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
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="Province"
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

          <Divider section />

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
              label={
                <label>
                  Please check this box if Last Name and First Names do not
                  apply to the applicant's parent because they have either a
                  registered Birth Certificate or Change of Name Certificate
                  bearing a Single Name
                </label>
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Parent's Last Name
              (at Birth)"
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
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Parent's First Names:"
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
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="If the country is not listed, please select 'Not Listed' and type the country name in the box below"
              options={options}
              // selection={values.languageFlag}
              placeholder={values.languageFlag1 || "Parent's Place of Birth"}
              onChange={(e, { value }) =>
                handleChange({
                  name: "languageFlag",
                  value: value
                })
              }
            />
            <Form.Field
              id="intendedPlace"
              name="intendedPlace"
              control={Input}
              label="Or Type"
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
            <Form.Field
              id="languageFlag"
              name="languageFlag"
              control={Select}
              label="Province"
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

export default Step2;
