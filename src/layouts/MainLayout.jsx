import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="container mx-auto max-w-screen-xl">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>

      <div className="bg-base-300">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
