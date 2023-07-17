/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import ImageInput from "./imginput.jsx";
import H2WithToolTip from "./h2withtooltip.jsx";
import { useEffect, useState } from "react";
import Image from "./postimage.jsx";
import SideBar from "./sidebar.jsx";
import {
  checkCookieExists,
  getCookie,
  setCookie,
} from "../../helpers/cookies.js";
import { getUrl, uploadImage } from "../../firebase/upload.jsx";
import { useNavigate } from "react-router-dom";
const BasicInfoPage = () => {
  const [cardImage, setcardImage] = useState();
  const [basicInfo, setbasicInfo] = useState({
    title: "",
    tagline: "",
    requiredAmount: "",
    tags: "",
    ideaCardImage: "",
    category: "",
    otherLink: "",
    cardDescription: "",
  });
  useEffect(() => {
    let data;
    if (checkCookieExists("logindata") && checkCookieExists("forminfo")){
      data = JSON.parse(getCookie("forminfo"));
    } else {
      data = {
        title: "",
        tagline: "",
        requiredAmount: "",
        tags: "",
        ideaCardImage: "",
        category: "",
        otherLink: "",
        cardDescription: "",
      };
    }

    setbasicInfo(data);
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(basicInfo);
    const { name, value } = e.target;
    setbasicInfo({ ...basicInfo, [name]: value });
  };

  return (
    <div>
      <SideBar />
      <div className="bg-white my-5 rounded container">
        <Image
          src={
            "https://img.freepik.com/free-vector/competent-resume-writing-professional-cv-constructor-online-job-application-profile-creation-african-american-woman-filling-up-digital-form-concept-illustration_335657-2053.jpg?w=826&t=st=1688947660~exp=1688948260~hmac=8b4a4c8346afbcc73665aa62040497401e2fba632ddf14fadc3acc49eb96ade4"
          }
        />
        <div className="inner  container">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const path = `/cardimage${
                checkCookieExists("logindata")
                  ? JSON.parse(getCookie("logindata")).userId
                  : ""
              }`;

              await uploadImage(path, cardImage).then((res) => {
                console.log(res);
              });
              const url = await getUrl(path);

              const obj = {
                ...basicInfo,
                cardImage: [{ path: url, type: "cardimage" }],
              };
              console.log(obj);
              setCookie("forminfo", JSON.stringify(obj));
              navigate("/contentinfo");
            }}
          >
            <div className="field">
              <div>
                <label htmlFor="title">
                  <H2WithToolTip
                    heading={"Idea Title"}
                    tooltip={`provide me with the specific idea or concept you would
                      like me to rephrase.`}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="title"
                    id="title"
                    value={basicInfo.title}
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="tagline">
                  <H2WithToolTip
                    heading={"Idea Tagline"}
                    tooltip={`Craft a concise and compelling description that
                      effectively communicates your idea to your target
                      audience.`}
                  />

                  <input
                    type="text"
                    className="ideainp"
                    placeholder="Type here..."
                    name="tagline"
                    id="tagline"
                    value={basicInfo.tagline}
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <div>
                <label htmlFor="requiredAmount">
                  <H2WithToolTip
                    heading={"Required Amount"}
                    tooltip={`Please select the required amount.`}
                  />

                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="requiredAmount"
                    id="country"
                    onChange={(e) => handleChange(e)}
                    value={basicInfo.requiredAmount}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="tags">
                  <H2WithToolTip
                    heading={"Tags"}
                    tooltip={`Provide a maximum of five keywords seperated by spaces,
                      related to your idea to improve its visibility and
                      discoverability.`}
                  />

                  <input
                    type="text"
                    className="ideainp"
                    placeholder="Type here..."
                    name="tags"
                    id="tags"
                    value={basicInfo.tags}
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="cardDescription">
                  <H2WithToolTip heading={"Card Description"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="cardDescription"
                    value={basicInfo.cardDescription}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="otherLink">
                  <H2WithToolTip heading={"Idea Link"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="otherLink"
                    value={basicInfo.otherLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
            </div>

            <div className="field">
              <div className="">
                <h2 className="my-4">Idea Card Image</h2>
                <ImageInput setcardImage={setcardImage} />
              </div>
              <div className="select_div_u d-flex flex-column justify-content-start">
                <h2>Select a Category</h2>

                <div className="selecttt">
                  <label htmlFor="category" className="w-75">
                    <select
                      name="category"
                      className="w-100 select-input"
                      id="category"
                      value={basicInfo.category}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="none">Choose</option>
                      <option value="education">Education</option>
                      <option value="science">science</option>
                      <option value="artncraft">Art & Craft</option>
                      <option value="technology">Technology</option>
                      <option value="business">Business</option>
                      <option value="travel">Travel</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <hr className="mt-10  " />
            <div className="d-flex justify-content-center">
              <button
                className="formbtn bg-midnight-green my-5"
                style={{ verticalAlign: "middle" }}
              >
                <span>Save & Continue </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoPage;
