/* eslint-disable react/prop-types */
import "./flipcard.css";
const Flipcard = ({ src, role, name, prof, desc,flip=true }) => {
  return (
    <div className="flip-card rounded">
      <div className={`${flip&&"flip-card-inner"} rounded`}>
        <div className="px-3 py-1 bg-light d-flex flex-column shadow align-items-center justify-content-around flip-card-front h-100 rounded">
          <img
            src={src}
            alt="Avatar"
            className="rounded-circle"
            style={{ width: "85%", height: "73%" }}
          />
          {flip&&<h3 className="my-1">{role}</h3>
        }
          </div>
          {flip&&<div className="px-3 py-3 bg-darkblue text-light flip-card-back shadow rounded">
          <h3 className="text-light">{name}</h3>
          <p className="text-light">{prof}</p>
          <p className="text-light">{desc}</p>
        </div>}
      </div>
    </div>
  );
};
export default Flipcard;