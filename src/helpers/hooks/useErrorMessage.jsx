import { useSelector } from 'react-redux';
import { selectIsAuthError } from '../../redux/auth/selectors';

export function useErrorMessage() {
  const isError = useSelector(selectIsAuthError);
  if (!isError) return '';
  const errorCode = parseInt(isError.slice(-3), 10);
  const errorMessage =
    errorCode == 400
      ? "Login or Password isn't correct"
      : 'Something went wrong. Please, try later!';

  return { errorMessage };
}
