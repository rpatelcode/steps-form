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

  // app1ApplicantSingleName Errors
  if (!values.app1ApplicantSingleName) {
    errors.app1ApplicantSingleName = false;
  }

  // app1ApplicantLastName Errors
  if (!values.app1ApplicantLastName) {
    errors.app1ApplicantLastName = "Last Name";
  } else if (values.app1ApplicantLastName.length < 2) {
    errors.app1ApplicantLastName = "Last Name";
  }
  // app1ApplicantFirstName Errors
  if (!values.app1ApplicantFirstName) {
    errors.app1ApplicantFirstName = "First Name";
  } else if (values.app1ApplicantFirstName.length < 2) {
    errors.app1ApplicantFirstName = "First Name";
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

  // #### STEP 2 ####

  // app1MotherSingleName: true,

  //   app1MotherLastName Errors
  //   app1MotherFirstName Errors

  //   app1MotherBirthCountry Errors
  //   app1MotherBirthCountryO Errors
  //   app1MotherBirthProvince Errors

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
