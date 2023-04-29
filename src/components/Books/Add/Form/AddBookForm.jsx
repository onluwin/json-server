import { Field, Form, Formik } from 'formik';

export const AddBookForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ title: '', text: '' }}>
      <Form onSubmit={onSubmit} style={{ display: 'grid' }}>
        <label>
          Book title
          <Field type="text" name="title" style={{ marginLeft: '5px' }} />
        </label>
        <label>
          Book text
          <Field type="text" name="text" style={{ marginLeft: '5px' }} />
        </label>
        <button type="submit">Add book</button>
      </Form>
    </Formik>
  );
};
