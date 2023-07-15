import { useContext, useEffect } from "react";
import Footer from "../components/footer/footer";
import MyNavbar from "../components/navbar/navbar";
import { getCookie } from "../helpers/cookies";
import UserContext from "../context/context";

const Layout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [_,setcontext] = useContext(UserContext)
  useEffect(() => {
    if (JSON.parse(getCookie("logindata"))){

      setcontext(JSON.parse(getCookie("logindata")))
    }
    else{
      setcontext(null)
    }
  }, []);
  return (
    <div>
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
