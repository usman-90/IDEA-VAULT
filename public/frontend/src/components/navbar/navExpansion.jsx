import "./nav.css";
import "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

let spArr = [
  {
    heading: "Home",
    link: "/",
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
  {
    heading: "Services",
    link: "/",
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
  {
    heading: "Industries",
    src: "/",
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
  {
    heading: "About",
    link: "/",
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
];
const Spoint2 = ({ point }) => {
  return <p className="text-light">{point}</p>;
};

const SPoint = (props) => {
  return (
    <>
      {!props.point ? (
        <p></p>
      ) : (
        props.point.map((subhead) => {
          return (
            <>
              <p className="sm-point text-light" key={subhead.head}>
                {subhead.head}
              </p>
              {subhead.points.map((point) => {
                return <Spoint2 point={point} key={point} />;
              })}
            </>
          );
        })
      )}
    </>
  );
};

const LPoint = ({ onChange, point, link, handleExpansion }) => {
  const showNavContents = () => {
    onChange(point);
  };

  return (
    <Link
      onKeyDown={(e) => {
        e.key == "Enter" ?? handleExpansion();
      }}
      onClick={handleExpansion}
      onMouseOver={showNavContents}
      onFocus={showNavContents}
      to={link}
    >
      <p className="p-2 xl-point">{point}</p>
    </Link>
  );
};

const NavExpansion = ({ width, width100, handleExpansion }) => {
  const [currNav, setcurrNav] = useState("");

  const handleNavChange = (curr) => {
    setcurrNav(null);
    setTimeout(() => {
      setcurrNav(curr);
    }, 200);
  };
  let curr = spArr.filter((sp) => {
    return sp.heading == currNav;
  });
  console.log("curr", curr);

  return (
    <div className={`${width} z-2 expansion_main_u`}>
      <div className="left_nav_u">
        <div className={` left_nav_content ${currNav ? `${width100}` : ""}`}>
          <SPoint
            point={curr.length > 0 ? curr[0].subheads : undefined}
            key={curr.length > 0 ? curr[0].subheads : undefined}
          />
        </div>
      </div>
      <div className={`right_nav_u`}>
        <div className={`right_nav_content`}>
          {spArr.map((point) => {
            return (
              <LPoint
                onChange={handleNavChange}
                point={point.heading}
                link={point.link}
                key={point.heading}
                handleExpansion={handleExpansion}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavExpansion;
