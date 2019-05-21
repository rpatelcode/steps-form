import React from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    // const validationErrors = validate(values);
    // setErrors(validationErrors);

    // const validationErrors = validate(values);
    // setErrors(validationErrors);
    // setSubmitting(true);

    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.log("No Errors!", errors);
        setSubmitting(false);
      } else {
        console.log("Yes Errors!", errors);
        setSubmitting(true);
      }
    }
  }, [isSubmitting, errors]);

  // to validate form on load
  React.useEffect(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }, [validate, values]);

  const handleChange = ({ name, value }) => {
    setValues({
      ...values,
      [name]: value
    });
  };

  // ######################
  // const handleChange = (e, { name, value }) => {
  //   console.log(name);
  //   console.log(value);
  //   // e.persist();
  //   const target = e.target;
  //   const val =
  //     target === null
  //       ? value
  //       : target.type === "checkbox"
  //       ? target.checked
  //       : value;
  //   console.log("val :::::", val);
  //   setValues({
  //     ...values,
  //     [name]: val
  //   });

  //   const validationErrors = validate(values);
  //   setErrors(validationErrors);
  //   setSubmitting(true);
  // };

  // const handleBlur = () => {
  //   const validationErrors = validate(values);
  //   setErrors(validationErrors);
  //   setSubmitting(true);
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    // handleBlur,
    values,
    errors,
    isSubmitting
  };
};

export default useFormValidation;
