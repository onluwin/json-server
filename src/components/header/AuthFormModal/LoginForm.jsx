import { Field, Form, Formik } from 'formik';

export const LoginForm = ({ openModal }) => {
  return (
    <>
      <Formik initialValues={{ username: '' }} onSubmit={openModal}>
        <Form autoComplete="off">
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
        </Form>
      </Formik>
    </>
  );
};
