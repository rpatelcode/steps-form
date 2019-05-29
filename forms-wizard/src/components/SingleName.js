import React from "react";
import { Checkbox, Input, Form } from "semantic-ui-react";
const SingleName = props => {
  const { id, handleChange, values, errors } = props;

  const singleName = "app1" + id + "SingleName";
  const lastName = "app1" + id + "LastName";
  const firstName = "app1" + id + "FirstName";

  // descriptor return name of values object
  const descriptor1 = Object.getOwnPropertyDescriptor(values, singleName);
  const singleNameValue = descriptor1.value;

  const descriptor2 = Object.getOwnPropertyDescriptor(values, lastName);
  const lastNameValue = descriptor2.value;

  const descriptor3 = Object.getOwnPropertyDescriptor(values, firstName);
  const firstNameValue = descriptor3.value;

  // descriptor return name of errors object

  const descriptor4 = Object.getOwnPropertyDescriptor(errors, singleName);
  const errorsSingleNameValue = descriptor4;

  const descriptor5 = Object.getOwnPropertyDescriptor(errors, lastName);
  const errorsLastNameValue = descriptor5;

  const descriptor6 = Object.getOwnPropertyDescriptor(errors, firstName);
  const errorsFirstNameValue = descriptor6;

  return (
    <>
      <Form.Field
        id={singleName}
        name={singleName}
        control={Checkbox}
        onChange={e =>
          handleChange({
            name: singleName,
            value: e.target.checked
          })
        }
        checked={singleNameValue}
        label={
          <label>
            Please check this box if Last Name and First Name do not apply to
            the applicant because they have either a registered Birth
            Certificate or Change of Name Certificate bearing a Single Name
          </label>
        }
      />
      <Form.Field
        id={lastName}
        name={lastName}
        control={Input}
        label={singleNameValue ? id + "'s Single Name" : id + "'s Last Name"} //{id + "'s Last Name"}
        placeholder={
          singleNameValue ? id + "'s Single Name" : id + "'s Last Name"
        }
        onChange={e =>
          handleChange({
            name: lastName,
            value: e.target.value
          })
        }
        value={lastNameValue}
        required
        error={errorsLastNameValue ? true : false}
      />

      {!singleNameValue ? (
        <Form.Field
          id={firstName}
          name={firstName}
          control={Input}
          label={id + "'s First Name"}
          placeholder={id + "'s First Name"}
          onChange={e =>
            handleChange({
              name: firstName,
              value: e.target.value
            })
          }
          value={firstNameValue}
          required
          error={errorsFirstNameValue ? true : false}
        />
      ) : null}
    </>
  );
};
export default SingleName;
