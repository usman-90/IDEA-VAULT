import blurImage from "../../images/image-fotor-20230717233648.jpg";
import { useEffect, useRef, useState } from "react";

const Description = ({ visData, visiblity, currSection, description,ideaid,userId }) => {
  const divRef = useRef(null);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    if (visiblity || ideaid==userId) {
      setVis(true);
    } else if (!visiblity && visData?.length === 0) {
      setVis(false);
    }
    vis
      ? (divRef.current.innerHTML = `${description}`)
      : (divRef.current.innerHTML = `<div className="position blurdiv reletive">
    <h3 className="hiddenmsg text-midnight-green">
      The idea is hidden, you need permission from Idea poster to
      see Details
    </h3>
    <img className="image-fluid w-100" src=${blurImage} alt="" />
  </div>`);
  }, [visiblity, vis,visData]);
  console.log("vis", vis);

  return (
    <>
      <div
        className={`${
          currSection == "description" ? "d-block" : "d-none"
        } container`}
      >
        <div className="row">
          <div className="col-xlg-6">
            <div
              ref={divRef}
              style={{ border: "2px solid #07393c", height: "maxcontent" }}
              className="container-fluid m-2 p-3 "
            ></div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};
export default Description;
