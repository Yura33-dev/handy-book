import { Navigate } from 'react-router-dom';
import { useAppSelector } from './helpers/hooks/reduxHooks';
import { selectIsLoggedIn } from './redux/auth/selectors';

type PrivateRouteProps = {
  component: React.ReactNode;
  redirectTo: string;
};

export const PrivateRoute = ({
  component: Component,
  redirectTo,
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
