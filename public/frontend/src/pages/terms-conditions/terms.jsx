import "./terms.css";
import NavbarTerms from "../../components/navbar/navbar3";
import Condition from "./condition";

const Term = () => {
  return (
    <div className="w-100  ">
      <NavbarTerms />

      <Condition />
      <div id="content"></div>
    </div>
  );
};
export default Term;
