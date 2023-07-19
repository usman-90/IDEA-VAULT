import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw", top: "0px", left: "0px" }}
      className="bg-mustard position-absolute "
    >
      <BarLoader color={"#36D7B7"} loading={true} />
    </div>
  );
};

export default Loader;
