import { useEffect, useRef } from "react";
import { formatTime } from "../../helpers/formatTime";

const Update = ({ currSection, updatesdata }) => {
  const updatesRef = useRef(null);
  useEffect(() => {
    updatesdata.map((update) => {
      updatesRef.current.innerHTML = update.updatedescription;
    });
  }, []);
  console.log(updatesdata);
  return (
    <>
      <div
        className={`${
          currSection == "update" ? "d-block" : "d-none"
        } container`}
      >
        {updatesdata
          ? updatesdata.map((update) => {
              return (
                <div className="row" key={update.updatetime}>
                  <div className="col-xlg-6">
                    <div className="d-flex align-items-center  justify-content-between">
                      <h5>{formatTime(update.updatetime)}</h5>
                    </div>
                    <div
                      ref={updatesRef}
                      style={{
                        border: "2px solid #07393c",
                        height: "maxcontent",
                      }}
                      className="container-fluid m-2 p-3 "
                    ></div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Update;
