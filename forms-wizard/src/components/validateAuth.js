const validateAuth = values => {
  let errors = {};

  // #### STEP 1 ####
  //   intendedPlace Errors
  if (values.homeAddressFlag === false) {
    errors.homeAddressFlag = "Required homeAddressFlag";
  }

  if (values.isOntarioMarriageFlag === false) {
    errors.isOntarioMarriageFlag = "Required isOntarioMarriageFlag";
  }
  //   intendedPlace Errors
  if (!values.intendedPlace) {
    errors.intendedPlace = "Required intendedPlace";
  } else if (values.intendedPlace.length < 2) {
    errors.intendedPlace = "Invalid intendedPlace";
  }
  //   proposedDate Errors
  if (!values.proposedDate) {
    errors.proposedDate = "Required proposedDate";
  } else if (values.proposedDate.length < 2) {
    errors.proposedDate = "Invalid proposedDate";
  }
  //   languageFlag Errors
  if (!values.languageFlag) {
    errors.languageFlag = "Required languageFlag";
  } else if (values.languageFlag.length < 2) {
    errors.languageFlag = "Invalid languageFlag";
  }

  // #### STEP 2 ####

  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
};
export default validateAuth;
