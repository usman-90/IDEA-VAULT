

const Image = ({ src }) => {
  console.log(src)
    return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <h1 className="my-4 text-black">Personal Information</h1>
      <img
        style={{ width: "30rem", height: "30rem" }}
        src={src}
        alt="sdfasdf"
      />
    </div>
  );
};

export default Image;
