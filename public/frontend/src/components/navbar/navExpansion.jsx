/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import "./nav.css";
import "bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/context";
import { logout } from "../../functions/logout";
import { checkCookieExists, destroyCookie, getCookie } from "../../helpers/cookies";

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
  //eslint-disable-next-line no-unused-vars
  const [_, setcontext] = useContext(UserContext);
  const handleLogout = async () => {
    const res = await logout();
    destroyCookie("logindata");
    setcontext(null);
    console.log(res);
  };
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
      <p
        onClick={point == "Logout" ? handleLogout : null}
        className="px-2 xl-point text-white"
      >
        {point}
      </p>
    </Link>
  );
};

const NavExpansion = ({ width, width100, handleExpansion }) => {
  const [readContext] = useContext(UserContext);
  console.log("context", readContext);
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
      heading: "Categories",
      link: "/",
      subheads: [
        {
          head: "View",
          points: ["Hello", "hi", "hola"],
        },
      ],
    },

    {
      heading: "Inbox",
      link: "/inbox",
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

    {
      heading: "Profile",
      link: `/profile/${checkCookieExists("logindata") ?`${JSON.parse(getCookie("logindata")).userId}`: ""}`,
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
    {
      heading: checkCookieExists("logindata") ? "Post Your Idea" : "",
      link: checkCookieExists("logindata") ? "/basicinfo" : "",
      subheads: [
        {
          head: "View",
          points: ["Hello", "hi", "hola"],
        },
      ],
    },
    {
      heading: "Policies",
      link: "/terms",
      subheads: [
        {
          head: "View",
          points: ["Hello", "hi", "hola"],
        },
      ],
    },
    {
      heading: checkCookieExists("logindata") ? "Logout" : "Login",
      link: readContext ? "/signin" : "/signin",
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
      <div className="left_nav_u bg-caribbean-current">
        <div className={` left_nav_content ${currNav ? `${width100}` : ""}`}>
          <SPoint
            point={curr.length > 0 ? curr[0].subheads : undefined}
            key={curr.length > 0 ? curr[0].subheads : undefined}
          />
        </div>
      </div>
      <div className={`right_nav_u bg-midnight-green`}>
        <div className={`right_nav_content`}>
          {spArr.map((point) => {
            if (
              (point.heading == "Inbox" || point.heading == "Post Your Idea" || point.heading == "Profile") &&
              !checkCookieExists("logindata")
            ) {
              return null;
            }
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
