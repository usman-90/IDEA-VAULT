import MyNavbar from "../components/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      {children}
    
    </div>
  );
};

export default Layout;
