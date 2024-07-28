import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLabel from '../../components/ui/AuthLabel/AuthLabel';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';

import css from './RegistrationPage.module.css';

function RegistrationPage() {
  return (
    <section className={css.registerSection}>
      <AuthLabel textLabel="Sign up" />
      <AuthForm authType="Register" />
      <OppositeOffer isRegistered={true} />
    </section>
  );
}

export default RegistrationPage;
