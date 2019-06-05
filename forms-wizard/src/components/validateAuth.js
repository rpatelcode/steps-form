import moment from "moment";

const validateAuth = values => {
  let errors = {};

  // #### STEP 1 ####
  //   isOntarioMarriageFlag Errors
  if (!values.isOntarioMarriageFlag) {
    errors.isOntarioMarriageFlag =
      "Please, Confirm the intended place of marriage is in Ontario?";
  }
  //   intendedPlace Errors
  if (!values.intendedPlace) {
    errors.intendedPlace = "Intended Place of Marriage";
  } else if (values.intendedPlace.length < 2) {
    errors.intendedPlace = "Invalid intendedPlace";
  }
  //   proposedDate Errors

  if (!values.proposedDate) {
    errors.proposedDate = "Intended Date of Marriage:";
  } else if (!moment(values.proposedDate, "MM-DD-YYYY", true).isValid()) {
    errors.proposedDate = "Intended Date of Marriage:";
  }

  // #### STEP 2 ####

  // app1SingleName Errors
  if (!values.app1SingleName) {
    errors.app1SingleName = false;
  }

  // app1LastName Errors
  if (!values.app1LastName) {
    errors.app1LastName = "Last Name";
  } else if (values.app1LastName.length < 2) {
    errors.app1LastName = "Last Name";
  }
  // app1ApplicantFirstName Errors
  if (!values.app1FirstName) {
    errors.app1FirstName = "First Name";
  } else if (values.app1FirstName.length < 2) {
    errors.app1FirstName = "First Name";
  }
  // app1MaritalStatus Errors

  // app1Religion Errors
  // app1ReligionOther Errors

  // app1BirthDay Errors
  // app1BirthMonth Errors
  // app1BirthYear Errors
  // app1Age Errors

  // app1BirthCountry Errors
  // app1BirthCountryO Errors
  // app1BirthProvince Errors

  // app1FatherSingleName Errors
  if (!values.app1FatherSingleName) {
    errors.app1FatherSingleName = false;
  }

  // app1FatherLastName Errors
  if (!values.app1FatherLastName) {
    errors.app1FatherLastName = "Last Name";
  } else if (values.app1FatherLastName.length < 2) {
    errors.app1FatherLastName = "Last Name";
  }
  // app1FatherFirstName Errors
  if (!values.app1FatherFirstName) {
    errors.app1FatherFirstName = "First Name";
  } else if (values.app1FatherFirstName.length < 2) {
    errors.app1FatherFirstName = "First Name";
  }
  // app1FatherBirthCountry Errors
  // app1FatherBirthCountryO Errors
  // app1FatherBirthProvince Errors

  // app1MotherSingleName Errors
  if (!values.app1MotherSingleName) {
    errors.app1MotherSingleName = false;
  }

  // app1MotherLastName Errors
  if (!values.app1MotherLastName) {
    errors.app1MotherLastName = "Last Name";
  } else if (values.app1MotherLastName.length < 2) {
    errors.app1MotherLastName = "Last Name";
  }
  // app1MotherFirstName Errors
  if (!values.app1MotherFirstName) {
    errors.app1MotherFirstName = "First Name";
  } else if (values.app1MotherFirstName.length < 2) {
    errors.app1MotherFirstName = "First Name";
  }

  //   app1MotherBirthCountry Errors
  //   app1MotherBirthCountryO Errors
  //   app1MotherBirthProvince Errors

  // #### STEP 2 ####

  //   app1Parent3SingleName Errors

  //   app1Parent3LastName Errors
  //   app1Parent3FirstName Errors

  //   app1Parent3BirthCountry Errors
  //   app1Parent3BirthCountryO Errors
  //   app1Parent3BirthProvince Errors

  //   app1Parent4SingleName Errors

  //   app1Parent4LastName Errors
  //   app1Parent4FirstName Errors

  //   app1Parent4BirthCountry Errors
  //   app1Parent4BirthCountryO Errors
  //   app1Parent4BirthProvince Errors

  //   app1ResidentStreet Errors
  //   app1ResidentApt Errors
  //   app1ResidentCity Errors
  //   app1ResidentCountry Errors
  //   app1ResidentCountryO Errors
  //   app1ResidentProvince Errors
  //   app1ResidentPostalCode Errors
  //   app1ResidentPhone Errors

  //   homeAddressFlag Errors

  //   app1HomeStreet Errors
  //   app1HomeApt Errors
  //   app1HomeCity Errors
  //   app1HomeCountry Errors
  //   app1HomeCountryO Errors
  //   app1HomeProvince Errors
  //   app1HomePostalCode Errors

  // +++Finished++

  // Email Errors
  // if (!values.email) {
  //   errors.email = "Required Email";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  // // Password Errors
  // if (!values.password) {
  //   errors.password = "Required Password";
  // } else if (values.password.length < 6) {
  //   errors.password = "Password must be at least 6 characters";
  // }
  // console.log("errors : ");
  // console.log(errors);
  return errors;
};
export default validateAuth;
