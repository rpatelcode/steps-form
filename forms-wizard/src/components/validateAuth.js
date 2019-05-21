const validateAuth = values => {
  let errors = {};

  // #### STEP 1 ####
  //   isOntarioMarriageFlag Errors
  if (!values.isOntarioMarriageFlag) {
    errors.isOntarioMarriageFlag =
      "Please, Confirm the intended place of marriage is in Ontario?";
  }
  // else if (values.isOntarioMarriageFlag === true) {
  //   errors.isOntarioMarriageFlag =
  //     "Confirm the intended place of marriage is in Ontario";
  // }

  //   homeAddressFlag Errors
  // if (!values.homeAddressFlag) {
  //   errors.homeAddressFlag = false;
  // } else if (values.homeAddressFlag === true) {
  //   errors.homeAddressFlag = "";
  // }
  //   intendedPlace Errors
  if (!values.intendedPlace) {
    errors.intendedPlace = "Intended Place of Marriage";
  } else if (values.intendedPlace.length < 2) {
    errors.intendedPlace = "Invalid intendedPlace";
  }
  //   proposedDate Errors
  if (!values.proposedDate) {
    errors.proposedDate = "Intended Date of Marriage:";
  } else if (values.proposedDate.length < 10) {
    errors.proposedDate = "Intended Date of Marriage:";
  }
  //   languageFlag Errors
  // if (!values.languageFlag) {
  //   errors.languageFlag = "Required languageFlag";
  // } else if (values.languageFlag.length < 2) {
  //   errors.languageFlag = "Invalid languageFlag";
  // }

  // #### STEP 2 ####

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
  console.log("errors : ");
  console.log(errors);
  return errors;
};
export default validateAuth;
