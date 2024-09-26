import { Formik, Form, Field } from 'formik';

function RegistrationForm() {
  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <label>
          UserName
          <Field type='text' name='name' />
        </label>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
}
export default RegistrationForm;
