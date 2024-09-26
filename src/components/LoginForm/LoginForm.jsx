import { Formik, Form, Field } from 'formik';

function LoginForm() {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <Field>
          <label>
            Email
            <Field type='email' name='email' />
          </label>
          <label>
            Password
            <Field type='password' name='password' />
          </label>
          <button type='submit'>Login</button>
        </Field>
      </Form>
    </Formik>
  );
}
export default LoginForm;
