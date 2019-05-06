import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
let faker = require("faker");

export class Form extends Component {
  state = {
    step: 1,
    isOntarioMarriageFlag: false,
    intendedPlace: faker.address.city(),
    proposedDate: faker.date.past(),
    languageFlag: "English", //English, French [also popup message open]
    app1SingleName: faker.name.findName(),
    app1LastName: faker.name.lastName(),
    app1FirstMiddleName: faker.name.lastName(),

    app1MaritalStatus: "never", // (never,widowed,divorced,divorcedOutside)

    app1Religion: "Baptist", // [ { key: 1, text: 'One', value: 1 }, { key: 2, text: 'Two', value: 2 }, { key: 3, text: 'Three', value: 3 },]
    app1ReligionOther: "Nothing",

    app1BirthDay: 1, // [from 1 to 31]
    app1BirthMonth: "May", //[from Jan to Dec]
    app1BirthYear: 1989, // from 2019 to 1901
    app1Age: 25, // Calculate current age

    app1BirthCountry: faker.address.country(),
    app1BirthCountryO: faker.address.country(),
    app1BirthProvince: faker.address.county(),

    app1FatherSingleName: faker.name.findName(),

    app1FatherLastName: faker.name.lastName(),
    app1FatherFirstName: faker.name.findName(),

    app1FatherBirthCountry: faker.address.country(),
    app1FatherBirthCountryO: faker.address.country(),
    app1FatherBirthProvince: faker.address.county(),

    app1MotherSingleName: faker.name.findName(),

    app1MotherLastName: faker.name.lastName(),
    app1MotherFirstName: faker.name.findName(),

    app1MotherBirthCountry: faker.address.country(),
    app1MotherBirthCountryO: faker.address.country(),
    app1MotherBirthProvince: faker.address.county(),

    app1Parent3SingleName: faker.name.findName(),

    app1Parent3LastName: faker.name.lastName(),
    app1Parent3FirstName: faker.name.findName(),

    app1Parent3BirthCountry: faker.address.country(),
    app1Parent3BirthCountryO: faker.address.country(),
    app1Parent3BirthProvince: faker.address.county(),

    app1Parent4SingleName: faker.name.findName(),

    app1Parent4LastName: faker.name.lastName(),
    app1Parent4FirstName: faker.name.findName(),

    app1Parent4BirthCountry: faker.address.country(),
    app1Parent4BirthCountryO: faker.address.country(),
    app1Parent4BirthProvince: faker.address.county(),

    app1ResidentStreet: faker.address.streetName(),
    app1ResidentApt: faker.finance.mask(),
    app1ResidentCity: faker.address.city(),
    app1ResidentCountry: faker.address.country(),
    app1ResidentCountryO: faker.address.country(),
    app1ResidentProvince: faker.address.county(),
    app1ResidentPostalCode: "M1P 4T6",
    app1ResidentPhone: faker.phone.phoneNumberFormat(),

    homeAddressFlag: false,

    app1HomeStreet: faker.address.streetName(),
    app1HomeApt: faker.finance.mask(),
    app1HomeCity: faker.address.city(),
    app1HomeCountry: faker.address.country(),
    app1HomeCountryO: faker.address.country(),
    app1HomeProvince: faker.address.county(),
    app1HomePostalCode: "S1M 6R8"

    // firstName: faker.name.findName(),
    // lastName: faker.name.lastName(),
    // email: faker.internet.email(),
    // occupation: faker.name.jobTitle(),
    // city: faker.address.city(),
    // bio: faker.name.jobDescriptor(),
    // text1: faker.company.companyName(),
    // text2: faker.company.catchPhrase(),
    // text3: faker.company.catchPhraseAdjective()
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    // const { step } = this.state;
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { step, firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Step4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default Form;
