import { Outlet } from "react-router-dom";
import MainLayout from "./Components/layout/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default App;
