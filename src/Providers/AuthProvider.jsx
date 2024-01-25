import { createContext, useEffect, useState } from "react";
import Propstyps from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // create User
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user Menege
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const values = {
    createUser,
    isLoading,
    login,
    user,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: Propstyps.node,
};
