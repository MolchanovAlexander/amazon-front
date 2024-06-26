import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRouteProps {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = localStorage.getItem('jwtToken');

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
