import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
          <label>
            Email
            <Field type='email' name='email' />
          </label>
          <label>
            Password
            <Field type='password' name='password' />
          </label>
          <button type='submit'>Login</button>
      </Form>
    </Formik>
  );
}
export default LoginForm;
