import { Navigate } from 'react-router-dom';
import { useAppSelector } from './helpers/hooks/reduxHooks';
import { selectIsLoggedIn } from './redux/auth/selectors';

type RestrictedRouteProps = {
  component: React.ReactNode;
  redirectTo: string;
};

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
