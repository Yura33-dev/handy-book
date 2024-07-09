import { useId } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { login, register } from '../../redux/auth/operations';
import {
  loginSchema,
  registerSchema,
} from '../../helpers/Schemas/authSchemasValidation';

function AuthForm({ authType }) {
  const dispatch = useDispatch();

  const initValues = { name: '', email: '', password: '', confirmPassword: '' };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const confirmPasswordFieldId = useId();

  function handleSubmit(credentials, actions) {
    switch (authType) {
      case 'Register':
        dispatch(
          register({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          })
        );
        break;
      case 'Login':
        dispatch(
          login({ email: credentials.email, password: credentials.password })
        );
        break;
    }
    actions.resetForm();
  }

  const validationSchema =
    authType === 'Register' ? registerSchema : loginSchema;

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {authType === 'Register' && (
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field id={nameFieldId} name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </div>
        )}

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field id={emailFieldId} name="email" type="email" />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field id={passwordFieldId} name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </div>

        {authType === 'Register' && (
          <div>
            <label htmlFor={confirmPasswordFieldId}>Confirm Password</label>
            <Field
              id={confirmPasswordFieldId}
              name="confirmPassword"
              type="password"
            />
            <ErrorMessage name="confirmPassword" component="span" />
          </div>
        )}

        <button type="submit">{authType}</button>
      </Form>
    </Formik>
  );
}

AuthForm.propTypes = {
  authType: PropTypes.string,
};

export default AuthForm;
