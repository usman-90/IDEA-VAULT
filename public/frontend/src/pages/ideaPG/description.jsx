import blurImage from "../../images/image-fotor-20230717233648.jpg";
import { useEffect, useState } from "react";

const Description = ({ visData, visiblity, currSection, description }) => {
  const [vis, setVis] = useState(true);
  useEffect(() => {
    if (visiblity) {
      setVis(true);
    } else if (!visiblity && visData?.length === 0) {
      setVis(false);
    }
  }, [visiblity, visData]);
  console.log(vis);

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
              style={{ border: "2px solid #07393c", height: "maxcontent" }}
              className="container-fluid m-2 p-3 "
            >
              {vis ? (
               description
              ) : (
                <div className="position blurdiv reletive">
                  <h3 className="hiddenmsg text-midnight-green">
                    The idea is hidden, you need permission from Idea poster to
                    see Details
                  </h3>
                  <img className="image-fluid" src={blurImage} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};
export default Description;
