import React from "react";
import Container from "../Components/ShearComponents/Container";
import useAuthUtilite from "../Hooks/useAuthUtilite";

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

export default Loading;
