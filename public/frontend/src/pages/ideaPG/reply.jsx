const Reply = () => {
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
            src="../images/edu.jpg"
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
          <h6 style={{ fontSize: ".8rem" }}>rajjafarhan@gamil.com</h6>
          <h6 style={{ fontSize: ".9rem" }} className="">
            wednesday, 9:00 pm
          </h6>
        </div>
      </div>
      <p style={{ width: "90%", height: "maxcontent" }}>
        learningorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Porro, similique? Praesentium cumque, ipsum incidunt reprehenderit
        voluptas inventore consequatur fuga enim.
      </p>
    </div>
  );
};

export default Reply;
