import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuthUtilite = () => {
  const authUtiliti = useContext(AuthContext);
  return authUtiliti;
};

export default useAuthUtilite;
