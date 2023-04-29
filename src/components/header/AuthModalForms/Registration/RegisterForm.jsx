import { Field, Form, Formik } from 'formik';

export const RegisterForm = ({ handleSubmit }) => {
  return (
    <>
      <Formik initialValues={{ username: '' }}>
        <Form
          style={{ marginTop: 25 }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};
