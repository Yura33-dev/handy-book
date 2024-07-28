import AuthLabel from '../../components/ui/AuthLabel/AuthLabel';
import AuthForm from '../../components/AuthForm/AuthForm';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';
import { useErrorMessage } from '../../helpers/hooks/useErrorMessage';

import css from './LoginPage.module.css';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';

function LoginPage() {
  const { errorMessage } = useErrorMessage();

  return (
    <section className={css.loginSection}>
      <AuthLabel textLabel="Sign in" />

      <AuthForm authType="Login" />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <OppositeOffer isRegistered={false} />
    </section>
  );
}

export default LoginPage;
