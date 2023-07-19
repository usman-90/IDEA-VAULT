import H2WithToolTip from "./h2withtooltip.jsx";
import UserprofileNav from "../viewprofile/userProfileNav.jsx";
import ImageInput from "./imginput.jsx";
import { checkCookieExists, getCookie } from "../../helpers/cookies.js";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo, updateuserinfo } from "../../functions/user.js";
import { useEffect, useState } from "react";
import { getUrl, uploadImage } from "../../firebase/upload.jsx";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const PosterInfo = () => {
  const [profile, setprofile] = useState();
  const [data, setdata] = useState({
    name: "",
    lastname: "",
    profession: "",
    contactno: "",
    country: "",
    city: "",
    state: "",
    organizationtype: "",
    bio: "",
    path: "",
    facebooklink: "",
    twitterlink: "",
    linkedinlink: "",
    instalink: "",
    userid: "",
  });
  const { addToast } = useToasts();
  let userid;
  if (checkCookieExists("logindata")) {
    userid = JSON.parse(getCookie("logindata")).userId;
  }
  const profileData = useQuery(["getuserinfo", userid], getUserInfo);
  if (profileData.isLoading) {
    console.log("fetching");
  }
  const profileres = profileData?.data?.row[0] ?? [];

  useEffect(() => {
    setdata({
      name: profileres.name ?? "",
      lastname: profileres.lastname ?? "",
      profession: profileres.profession ?? "",
      contactno: profileres.contactno ?? "",
      country: profileres.country ?? "",
      city: profileres.city ?? "",
      state: profileres.state ?? "",
      organizationtype: profileres.organizationtype ?? "",
      bio: profileres.bio ?? "",
      path: profileres.path ?? "",
      facebooklink: profileres.facebooklink ?? "",
      twitterlink: profileres.twitterlink ?? "",
      linkedinlink: profileres.linkedinlink ?? "",
      instalink: profileres.instalink ?? "",
      userid: profileres.userid ?? "",
    });
  }, []);
  const navigate = useNavigate();
  console.log(profileres);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  return (
    <>
      <UserprofileNav />
      <div className="bg-white rounded container my-5">
        <div className="inner px-5 p-5">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              await uploadImage(`/profiles/${data.userid}`, profile).then(
                (res) => {
                  console.log(res);
                }
              );

              const path = await getUrl(`/profiles/${data.userid}`);
              const obj = { ...data, path };
              setdata({ ...data, path });

              const res = await updateuserinfo(obj);
              
              addToast("Profile Updated Successfully! ", {
                appearance: "success",
                autoDismiss: true,
              });
              console.log(res);
              navigate(`/posterinfo/${userid}`);
            }}
          >
            <div className="my-4 field">
              <div>
                <label htmlFor="name">
                  <H2WithToolTip heading={"First Name"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="lastname">
                  <H2WithToolTip heading={"Last Name"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="lastname"
                    id="lastname"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={data.lastname}
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="profession">
                  <H2WithToolTip heading={"Profession"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="profession"
                    id="profession"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={data.profession}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="contactno">
                  <H2WithToolTip heading={"Phone Number"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="contactno"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id="contactno"
                    value={data.contactno}
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="country">
                  <H2WithToolTip heading={"Country"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="country"
                    value={data.country}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="city">
                  <H2WithToolTip heading={"City"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="city"
                    id=""
                    value={data.city}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="my-4 field">
              <div>
                <label htmlFor="state">
                  <H2WithToolTip heading={"State"} />
                  <input
                    type="email"
                    placeholder="Type here..."
                    className="ideainp"
                    name="state"
                    id=""
                    value={data.state}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
              <div>
                <H2WithToolTip heading={"Organization Type"} />
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input bg-midnight-green me-2"
                    type="radio"
                    name="organizationtype"
                    id="orgtype1"
                    value={"individual"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="organizationtype"
                  >
                    Individual
                  </label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input bg-midnight-green me-2"
                    type="radio"
                    name="organizationtype"
                    value={"Group"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id="orgtype2"
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="organizationtype"
                  >
                    Group
                  </label>
                </div>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="facebooklink">
                  <H2WithToolTip heading={"Facebook"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="facebooklink"
                    value={data.facebooklink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="twitterlink">
                  <H2WithToolTip heading={"Twitter"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="twitterlink"
                    value={data.twitterlink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="my-4 field">
              <div>
                <label htmlFor="linkedinlink">
                  <H2WithToolTip heading={"Linked In"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    value={data.linkedinLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="linkedinlink"
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="instalink">
                  <H2WithToolTip heading={"Instagram"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="instalink"
                    value={data.instaLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="bio">
                  <H2WithToolTip heading={"bio"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="bio"
                    value={data.bio}
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
              <div className="">
                <h2 className="my-4">Profile Picture</h2>
                <ImageInput setcardImage={setprofile} />
              </div>
            </div>

            <hr className="mt-10  " />
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="formbtn bg-midnight-green"
                style={{ verticalAlign: "middle" }}
              >
                <span>Save </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PosterInfo;
