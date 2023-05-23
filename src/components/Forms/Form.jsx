import { Formik } from 'formik';
import React from 'react';

const Form = ({ onSubmit, initialValues, validationSchema, children }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {() => children}
    </Formik>
  );
};

export default Form;
