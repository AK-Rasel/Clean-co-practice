import { Navigate } from "react-router-dom";
import useAuthUtilite from "../Hooks/useAuthUtilite";
import PropTypes from "prop-types";
import Container from "../Components/ShearComponents/Container";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuthUtilite();
  if (isLoading) {
    return (
      <Container>
        <span className="loading loading-bars loading-lg "></span>
      </Container>
    );
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" />;
  }
  return children;
};
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
