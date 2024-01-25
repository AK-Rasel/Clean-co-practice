import Propstypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-[25px]">{children}</div>
  );
};
// prop-Types
Container.propTypes = {
  children: Propstypes.node,
};
export default Container;
