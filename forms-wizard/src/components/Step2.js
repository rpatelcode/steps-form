import React from "react";
import {
  Button,
  Input,
  Container,
  Header,
  Form,
  Message,
  Divider
} from "semantic-ui-react";
import Steps from "./Steps";

const Step2 = props => {
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
          <Form.Group widths="equal">
            <Form.Field
              id="Occupation"
              name="Occupation"
              control={Input}
              label="Occupation"
              placeholder="Occupation"
              // onChange={handleChange("occupation")}
              onChange={handleChange}
              defaultValue={values.occupation}
            />
            <Form.Field
              id="city"
              name="city"
              control={Input}
              label="City"
              placeholder="City"
              // onChange={handleChange("city")}
              onChange={handleChange}
              defaultValue={values.city}
            />
          </Form.Group>
          <Form.Field
            id="bio"
            name="bio"
            control={Input}
            label="Bio"
            placeholder="Bio"
            // onChange={handleChange("bio")}
            onChange={handleChange}
            defaultValue={values.bio}
          />

          <Divider section />

          <Header as="h3" textAlign="left">
            Parent 2
          </Header>
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
