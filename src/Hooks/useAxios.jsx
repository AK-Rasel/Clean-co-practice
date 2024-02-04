import axios from "axios";
import useAuthUtilite from "./useAuthUtilite";
// import useAuthUtilite from "./useAuthUtilite";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuthUtilite();

  // interceptor
  // instance.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     // console.log(error);
  //     if (error.response.status === 401 || error.response.status === 403) {
  //       logOut();
  //     }
  //   }
  // );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.data.status === 403) {
        logOut();
      }
      // return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxios;
