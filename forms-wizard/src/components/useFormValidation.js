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
        console.log("WORKING!", values);
        setSubmitting(false);
      } else {
        console.log("NOT WORKING!", values);
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (e, { name, value }) => {
    const target = e.target;
    const val = target.type === "checkbox" ? target.checked : value;
    setValues({
      ...values,
      [name]: val
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    console.log(name);
    console.log(val);
  };

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
