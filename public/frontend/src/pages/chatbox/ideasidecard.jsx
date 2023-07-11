const IdeaSideCard = ({ image, title, username }) => {
  return (
    <div className="d-flex jusitfy-content-around align-items-start">
      <div className="isc_img w-35 h-35 m-2">
        <img className="w-100 h-100" src={`${image}`} alt="" />
      </div>
      <div className="isc_pp m-2 d-flex flex-column justify-content-start align-items-start">
        <p className="fw-bold fs-4 p-0 m-0">{title}</p>
        <p className="p-0 m-0">by {username}</p>
      </div>
    </div>
  );
};

export default IdeaSideCard;
