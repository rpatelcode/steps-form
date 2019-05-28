import faker from "faker";
import _ from "lodash";
import React from "react";
import { Input, Form, Header, Dropdown, Divider } from "semantic-ui-react";
import SingleName from "./SingleName";
import provinceOptions from "./ProvinceOptions";

const obj1 = _.map(faker.definitions.address.country, country => ({
  key: country,
  text: country,
  value: country
}));

const obj2 = [{ key: "Not Listed", text: "Not Listed", value: "Not Listed" }];

const countryOptions = [...obj1, ...obj2];

// console.log("obj3 : " + obj3);
const Parent = props => {
  const { id, handleChange, values, errors } = props;

  //   const singleName = "app1" + id + "SingleName";
  //   const lastName = "app1" + id + "LastName";
  //   const firstName = "app1" + id + "FirstName";

  // descriptor return name of values object
  //   const descriptor1 = Object.getOwnPropertyDescriptor(values, singleName);
  //   const singleNameValue = descriptor1.value;

  //   const descriptor2 = Object.getOwnPropertyDescriptor(values, lastName);
  //   const lastNameValue = descriptor2.value;

  //   const descriptor3 = Object.getOwnPropertyDescriptor(values, firstName);
  //   const firstNameValue = descriptor3.value;

  // descriptor return name of errors object

  //   const descriptor4 = Object.getOwnPropertyDescriptor(errors, singleName);
  //   const errorsSingleNameValue = descriptor4;

  //   const descriptor5 = Object.getOwnPropertyDescriptor(errors, lastName);
  //   const errorsLastNameValue = descriptor5;

  //   const descriptor6 = Object.getOwnPropertyDescriptor(errors, firstName);
  //   const errorsFirstNameValue = descriptor6;

  return (
    <>
      <Divider section />
      <Header as="h3" textAlign="left">
        Parent 1
      </Header>
      <Form.Group>
        <SingleName
          id={"Father"}
          handleChange={handleChange}
          values={values}
          errors={errors}
        />
      </Form.Group>
      <Form.Group>
        <Form.Field>
          <label>Select Country</label>
          <Dropdown
            search
            selection
            options={countryOptions}
            placeholder={
              values.app1FatherBirthCountry || "Parent's Place of Birth"
            }
            onChange={(e, { value }) =>
              handleChange({
                name: "app1FatherBirthCountry",
                value: value
              })
            }
          />
        </Form.Field>
        <Form.Field
          id="app1BirthCountryO"
          name="app1BirthCountryO"
          control={Input}
          label="Or Type"
          placeholder="Country"
          onChange={e =>
            handleChange({
              name: "app1BirthCountryO",
              value: e.target.value
            })
          }
          value={values.app1BirthCountryO}
          required
          error={errors.app1BirthCountryO ? true : false}
        />
        {values.app1FatherBirthCountry === "Canada" ? (
          <Form.Field>
            <label> Province </label>
            <Dropdown
              search
              selection
              options={provinceOptions}
              placeholder={values.app1FatherBirthProvince || "Ontario"}
              onChange={(e, { value }) =>
                handleChange({
                  name: "app1FatherBirthProvince",
                  value: value
                })
              }
            />
          </Form.Field>
        ) : null}
      </Form.Group>
    </>
  );
};
export default Parent;
