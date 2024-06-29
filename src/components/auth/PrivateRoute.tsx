import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  isAllowed: boolean;
  redirectPath: string;
}

const PrivateRoute = ({ children, isAllowed, redirectPath }: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PrivateRoute;
