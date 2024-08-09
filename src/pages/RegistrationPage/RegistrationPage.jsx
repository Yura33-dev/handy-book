import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLabel from '../../components/ui/AuthLabel/AuthLabel';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';
import { useErrorMessage } from '../../helpers/hooks/useErrorMessage';

import css from './RegistrationPage.module.css';

function RegistrationPage() {
  const { errorMessage } = useErrorMessage();

  return (
    <section className={css.registerSection}>
      <AuthLabel textLabel="Sign up" />

      <AuthForm authType="Register" />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <OppositeOffer isRegistered={true} />
    </section>
  );
}

export default RegistrationPage;
