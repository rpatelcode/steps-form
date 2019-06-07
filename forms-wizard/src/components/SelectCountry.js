import faker from "faker";
import _ from "lodash";
import React from "react";
import { Input, Form, Dropdown } from "semantic-ui-react";
import provinceOptions from "./ProvinceOptions";

const obj1 = _.map(faker.definitions.address.country, country => ({
  key: country,
  text: country,
  value: country
}));

const obj2 = [{ key: "Not Listed", text: "Not Listed", value: "Not Listed" }];
const countryOptions = [...obj1, ...obj2];

const SelectCountry = props => {
  const { id, handleChange, values, errors } = props;

  const country = "app1" + id + "BirthCountry";
  const country0 = "app1" + id + "BirthCountry0";
  const province = "app1" + id + "BirthProvince";

  // descriptor return name of values object
  const descriptor1 = Object.getOwnPropertyDescriptor(values, country);
  const countryValue = descriptor1.value;

  const descriptor2 = Object.getOwnPropertyDescriptor(values, country0);
  const country0Value = descriptor2.value;

  const descriptor3 = Object.getOwnPropertyDescriptor(values, province);
  const provinceValue = descriptor3.value;

  // descriptor return name of errors object

  const descriptor4 = Object.getOwnPropertyDescriptor(errors, country);
  const errorsCountryValue = descriptor4;

  const descriptor5 = Object.getOwnPropertyDescriptor(errors, country0);
  const errorsCountry0Value = descriptor5;

  const descriptor6 = Object.getOwnPropertyDescriptor(errors, province);
  const errorsProvinceValue = descriptor6;
  return (
    <>
      <Form.Group>
        <Form.Field>
          <label>
            If the country is not listed, please select 'Not Listed' and type
            the country name in the box below
          </label>
          <Dropdown
            search
            selection
            options={countryOptions}
            placeholder={countryValue ? countryValue : id + "'s Place of Birth"}
            onChange={(e, { value }) =>
              handleChange({
                name: country,
                value: value
              })
            }
          />
        </Form.Field>
        {countryValue === "Not Listed" ? (
          <Form.Field
            id={country0}
            name={country0}
            control={Input}
            label="Or Type"
            // placeholder="Or Type"
            onChange={e =>
              handleChange({
                name: country0,
                value: e.target.value
              })
            }
            value={country0Value}
            required
            error={errorsCountry0Value ? true : false}
          />
        ) : null}

        {countryValue === "Canada" ? (
          <Form.Field>
            <label> Province </label>
            <Dropdown
              search
              selection
              options={provinceOptions}
              // placeholder={id + "'s Province"}
              onChange={(e, { value }) =>
                handleChange({
                  name: province,
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
export default SelectCountry;
