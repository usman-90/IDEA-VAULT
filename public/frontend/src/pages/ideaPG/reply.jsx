import { formatTime } from "../../helpers/formatTime";

const Reply = ({name,path,replycontent,replytime}) => {
  return (
    <div
      style={{ height: "maxcontent", marginLeft: "9%", width: "90%" }}
      className="container d-flex flex-column  "
    >
      <div
        style={{
          border: "2px solid #07393c",
          backgroundColor: "#07393c",
          color: "white",
        }}
        className=" d-flex gap-2 py-1   my-2 "
      >
        <div>
          <img
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            className="img-fluid mx-2"
            src={path}
            alt="oo"
          />
        </div>
        <div
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="container-fluid d-flex commentheader"
        >
          <h6 style={{ fontSize: ".8rem" }}>{name}</h6>
          <h6 style={{ fontSize: ".9rem" }} className="">
            {formatTime(replytime)}
          </h6>
        </div>
      </div>
      <p style={{ width: "90%", height: "maxcontent" }}>
        {replycontent}
      </p>
    </div>
  );
};

export default Reply;
