import { selectIsAuthError } from '../../redux/auth/selectors';
import { useAppSelector } from './reduxHooks';

export function useErrorMessage(pageType: string = 'RegisterPage') {
  const isError = useAppSelector(selectIsAuthError);
  if (!isError) return { errorMessage: '' };

  let errorMessage;

  if (pageType === 'LoginPage') {
    errorMessage =
      isError === 400
        ? "Login or Password isn't correct"
        : 'Something went wrong. Please, try later!';
  } else {
    errorMessage =
      isError === 400
        ? 'Email already exist'
        : 'Something went wrong. Please, try later!';
  }

  return { errorMessage };
}
