import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const FormikIntro = () => {
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => <Form>
           <div> <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" /></div>
            <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>}
      </Formik>
    </div>
  );
};

export default FormikIntro;
