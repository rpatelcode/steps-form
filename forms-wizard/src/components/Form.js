import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import moment from "moment";
import faker from "faker/locale/en_CA";

import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

const INITIAL_STATE = {
  isOntarioMarriageFlag: true,
  intendedPlace: faker.address.city(),
  proposedDate: moment(faker.date.future()), //undefined, //moment(), //moment(faker.date.future()).format("DD/MM/YYYY"),
  languageFlag: "english", //English, French [also popup message open]
  app1SingleName: false,
  app1LastName: faker.name.lastName(),
  app1FirstName: faker.name.lastName(),

  app1MaritalStatus: "never", // (never,widowed,divorced,divorcedOutside)

  app1Religion: "Baptist", // [ { key: 1, text: 'One', value: 1 }, { key: 2, text: 'Two', value: 2 }, { key: 3, text: 'Three', value: 3 },]
  app1ReligionOther: "Nothing",

  app1BirthDay: 1, // [from 1 to 31]
  app1BirthMonth: "May", //[from Jan to Dec]
  app1BirthYear: 1989, // from 2019 to 1901
  app1Age: null, // Calculate current age

  app1BirthCountry: faker.address.country(),
  app1BirthCountry0: faker.address.country(),
  app1BirthProvince: faker.address.county(),

  app1FatherSingleName: false,

  app1FatherLastName: faker.name.lastName(),
  app1FatherFirstName: faker.name.findName(),

  app1FatherBirthCountry: null,
  app1FatherBirthCountry0: null,
  app1FatherBirthProvince: null,

  app1MotherSingleName: false,

  app1MotherLastName: faker.name.lastName(),
  app1MotherFirstName: faker.name.findName(),

  app1MotherBirthCountry: null,
  app1MotherBirthCountry0: null,
  app1MotherBirthProvince: null,

  app1Parent3SingleName: false,

  app1Parent3LastName: faker.name.lastName(),
  app1Parent3FirstName: faker.name.findName(),

  app1Parent3BirthCountry: null,
  app1Parent3BirthCountry0: null,
  app1Parent3BirthProvince: null,

  app1Parent4SingleName: false,

  app1Parent4LastName: faker.name.lastName(),
  app1Parent4FirstName: faker.name.findName(),

  app1Parent4BirthCountry: null,
  app1Parent4BirthCountry0: null,
  app1Parent4BirthProvince: null,

  app1ResidentStreet: faker.address.streetName(),
  app1ResidentApt: faker.finance.mask(),
  app1ResidentCity: faker.address.city(),
  app1ResidentCountry: faker.address.country(),
  app1ResidentCountry0: faker.address.country(),
  app1ResidentProvince: faker.address.county(),
  app1ResidentPostalCode: "M1P 4T6",
  app1ResidentPhone: faker.phone.phoneNumberFormat(),

  homeAddressFlag: false,

  app1HomeStreet: faker.address.streetName(),
  app1HomeApt: faker.finance.mask(),
  app1HomeCity: faker.address.city(),
  app1HomeCountry: faker.address.country(),
  app1HomeCountry0: faker.address.country(),
  app1HomeProvince: faker.address.county(),
  app1HomePostalCode: "S1M 6R8"
};

const Form = () => {
  const [step, setstep] = React.useState(1);
  const {
    handleSubmit,
    handleChange,
    // handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);

  const nextStep = () => {
    setstep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setstep(step - 1);
  };

  // Handle fields change
  // const handleChange = input => e => {
  //   setState({ ...state, [input]: e.target.value });
  // };
  // console.clear();
  // console.log(step);
  console.log(values);

  // const {
  //   isOntarioMarriageFlag,
  //   intendedPlace,
  //   proposedDate,
  //   languageFlag,
  //   app1SingleName,
  //   app1LastName,
  //   app1FirstMiddleName,
  //   app1MaritalStatus,
  //   app1Religion,
  //   app1ReligionOther,
  //   app1BirthDay,
  //   app1BirthMonth,
  //   app1BirthYear,
  //   app1Age,
  //   app1BirthCountry,
  //   app1BirthCountryO,
  //   app1BirthProvince,
  //   app1FatherSingleName,
  //   app1FatherLastName,
  //   app1FatherFirstName,
  //   app1FatherBirthCountry,
  //   app1FatherBirthCountryO,
  //   app1FatherBirthProvince,
  //   app1MotherSingleName,
  //   app1MotherLastName,
  //   app1MotherFirstName,
  //   app1MotherBirthCountry,
  //   app1MotherBirthCountryO,
  //   app1MotherBirthProvince,
  //   app1Parent3SingleName,
  //   app1Parent3LastName,
  //   app1Parent3FirstName,
  //   app1Parent3BirthCountry,
  //   app1Parent3BirthCountryO,
  //   app1Parent3BirthProvince,
  //   app1Parent4SingleName,
  //   app1Parent4LastName,
  //   app1Parent4FirstName,
  //   app1Parent4BirthCountry,
  //   app1Parent4BirthCountryO,
  //   app1Parent4BirthProvince,
  //   app1ResidentStreet,
  //   app1ResidentApt,
  //   app1ResidentCity,
  //   app1ResidentCountry,
  //   app1ResidentCountryO,
  //   app1ResidentProvince,
  //   app1ResidentPostalCode,
  //   app1ResidentPhone,
  //   homeAddressFlag,
  //   app1HomeStreet,
  //   app1HomeApt,
  //   app1HomeCity,
  //   app1HomeCountry,
  //   app1HomeCountryO,
  //   app1HomeProvince,
  //   app1HomePostalCode
  // } = state;
  // const values = {
  //   step,
  //   isOntarioMarriageFlag,
  //   intendedPlace,
  //   proposedDate,
  //   languageFlag,
  //   app1SingleName,
  //   app1LastName,
  //   app1FirstMiddleName,
  //   app1MaritalStatus,
  //   app1Religion,
  //   app1ReligionOther,
  //   app1BirthDay,
  //   app1BirthMonth,
  //   app1BirthYear,
  //   app1Age,
  //   app1BirthCountry,
  //   app1BirthCountryO,
  //   app1BirthProvince,
  //   app1FatherSingleName,
  //   app1FatherLastName,
  //   app1FatherFirstName,
  //   app1FatherBirthCountry,
  //   app1FatherBirthCountryO,
  //   app1FatherBirthProvince,
  //   app1MotherSingleName,
  //   app1MotherLastName,
  //   app1MotherFirstName,
  //   app1MotherBirthCountry,
  //   app1MotherBirthCountryO,
  //   app1MotherBirthProvince,
  //   app1Parent3SingleName,
  //   app1Parent3LastName,
  //   app1Parent3FirstName,
  //   app1Parent3BirthCountry,
  //   app1Parent3BirthCountryO,
  //   app1Parent3BirthProvince,
  //   app1Parent4SingleName,
  //   app1Parent4LastName,
  //   app1Parent4FirstName,
  //   app1Parent4BirthCountry,
  //   app1Parent4BirthCountryO,
  //   app1Parent4BirthProvince,
  //   app1ResidentStreet,
  //   app1ResidentApt,
  //   app1ResidentCity,
  //   app1ResidentCountry,
  //   app1ResidentCountryO,
  //   app1ResidentProvince,
  //   app1ResidentPostalCode,
  //   app1ResidentPhone,
  //   homeAddressFlag,
  //   app1HomeStreet,
  //   app1HomeApt,
  //   app1HomeCity,
  //   app1HomeCountry,
  //   app1HomeCountryO,
  //   app1HomeProvince,
  //   app1HomePostalCode
  // };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          handleSubmit={handleSubmit}
          // handleBlur={handleBlur}
          isSubmitting={isSubmitting}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          handleSubmit={handleSubmit}
          // handleBlur={handleBlur}
          isSubmitting={isSubmitting}
        />
      );
    case 3:
      return (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          handleSubmit={handleSubmit}
          // handleBlur={handleBlur}
          isSubmitting={isSubmitting}
        />
      );
    case 4:
      return (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          handleSubmit={handleSubmit}
          // handleBlur={handleBlur}
          isSubmitting={isSubmitting}
        />
      );
    default:
      return null;
  }
};

export default Form;
