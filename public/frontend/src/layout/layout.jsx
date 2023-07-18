import Footer from "../components/footer/footer";
import MyNavbar from "../components/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
