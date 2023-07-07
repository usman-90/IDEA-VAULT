import "./nav.css";
import "bootstrap";
import { useState } from "react";

let spArr = [
  {
    heading: "Home",
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
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
  {
    heading: "Industries",
    subheads: [
      {
        head: "View",
        points: ["Hello", "hi", "hola"],
      },
    ],
  },
  {
    heading: "About",
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
const Spoint2 = ({point}) => {
  console.log(point);
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

const LPoint = ({ onChange, point }) => {
  console.log("Lp");
  console.log(point);
  const showNavContents = () => {
    onChange(point);
  };

  return (
    <p
      onMouseOver={showNavContents}
      onFocus={showNavContents}
      className="p-2 xl-point"
    >
      {point}
    </p>
  );
};

const NavExpansion = (myclass) => {
  const [currNav, setcurrNav] = useState("");
  console.log(currNav);
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
    <div className={`${myclass.width} z-2 expansion_main_u`}>
      <div className="left_nav_u">
        <div
          className={` left_nav_content ${
            currNav ? `${myclass.width100}` : ""
          }`}
        >
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
                key={point.heading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavExpansion;
