/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import ImageInput from "./imginput.jsx";
import H2WithToolTip from "./h2withtooltip.jsx";
import { useState } from "react";
import Image from "./postimage.jsx";
import SideBar from "./sidebar.jsx";
const BasicInfoPage = () => {
  const [basicInfo, setbasicInfo] = useState({
    title: "",
    tagline: "",
    country: "",
    tags: "",
    ideaCardImage: "",
    category: "",
  });
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
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              let tags = formData.get("tags").split(" ");
              if (tags.length > 5) {
                alert("Please insert only 5 tags");
                return;
              }
              let obj = {
                title: formData.get("title") ?? "",
                tagline: formData.get("tagline") ?? "",
                country: formData.get("country") ?? "",
                tags: tags ?? "",
                ideaCardImage: formData.get("cardimg") ?? "",
                category: formData.get("category") ?? "",
              };
              setbasicInfo(obj);
              console.log(basicInfo);
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
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <div>
                <label htmlFor="country">
                  <H2WithToolTip
                    heading={"Country"}
                    tooltip={`Please select the location from where you are operating
                      your idea. This location will be displayed on your idea
                      page for your audience to view.`}
                  />

                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="country"
                    id="country"
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
                    onBlur={(e) => {
                      let tags = e.target.value.split(" ");
                      console.log(tags);
                      if (tags.length > 5) {
                        alert("please insert only 5 tags");
                      } else {
                        return;
                      }
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <div className="">
                <h2 className="my-4">Idea Card Image</h2>
                <ImageInput />
              </div>
              <div className="select_div_u d-flex flex-column justify-content-start">
                <h2>Select a Category</h2>

                <div className="selecttt">
                  <label htmlFor="category" className="w-75">
                    <select
                      name="category"
                      className="w-100 select-input"
                      id="category"
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
