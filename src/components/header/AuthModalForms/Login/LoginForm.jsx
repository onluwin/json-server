import { Field, Form, Formik } from 'formik';

export const LoginForm = ({ handleSubmit }) => {
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
