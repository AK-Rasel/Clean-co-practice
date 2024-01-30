import Container from "../Components/ShearComponents/Container";
import useAuthUtilite from "../Hooks/useAuthUtilite";
import Propstyps from "prop-types";
const Loading = ({ children }) => {
  const { isLoading } = useAuthUtilite();
  if (isLoading) {
    return (
      <Container>
        <span className="loading loading-bars loading-lg "></span>
      </Container>
    );
  }
  return children;
};
// propestyps
Loading.propTypes = {
  children: Propstyps.node,
};
export default Loading;
