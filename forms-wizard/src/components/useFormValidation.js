import React from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("Working!", values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const toggle = e => {
    switch (e.target.name) {
      case "isOntarioMarriageFlag":
        setValues({
          ...values,
          isOntarioMarriageFlag: !values.isOntarioMarriageFlag
        });
        console.log(
          "values.isOntarioMarriageFlag : " +
            values.isOntarioMarriageFlag +
            "homeAddressFlag : " +
            values.homeAddressFlag
        );
        break;
      case "homeAddressFlag":
        setValues({
          ...values,
          homeAddressFlag: !values.homeAddressFlag
        });
        console.log(
          "values.isOntarioMarriageFlag : " +
            values.isOntarioMarriageFlag +
            "homeAddressFlag : " +
            values.homeAddressFlag
        );
        break;

      default:
        break;
    }
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };
  // const handleChange = input => e => {
  //   setValues({ ...values, [input]: e.target.value });
  // };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    toggle,
    values,
    errors,
    isSubmitting
  };
};

export default useFormValidation;
