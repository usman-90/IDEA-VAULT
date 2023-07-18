import { useEffect, useState } from "react";
import H2WithToolTip from "./h2withtooltip.jsx";
import { checkCookieExists } from "../../helpers/cookies.js";
import ImageUploader from "./imageuploader.jsx";
import YoutubeVideo from "./youtubeVideo.jsx";
import Editor from "./editor.jsx";
import Faq from "./faq.jsx";
import { getUrl, uploadImage } from "../../firebase/upload.jsx";
import SideBar from "./sidebar.jsx";
import { getCookie, setCookie } from "../../helpers/cookies.js";
import { useNavigate } from "react-router-dom";
const Content = () => {
  const [videoUrl, setvideoUrl] = useState();
  const [mounted, setMounted] = useState(false);
  const [mycomponents, setComponents] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      checkCookieExists("logindata") &&
      checkCookieExists("forminfo") &&
      checkCookieExists("forminfo") &&
      checkCookieExists("forminfo")
    ) {
      setvideoUrl(JSON.parse(getCookie("contentinfo")).videoid ?? "");
      setDescription(JSON.parse(getCookie("contentinfo")).description ?? "");
      setSelectedImages(JSON.parse(getCookie("contentinfo")).images ?? "");
      console.log(JSON.parse(getCookie("contentinfo")));
    }
  }, []);

  const handleDescription = (desc) => {
    setDescription(desc);
  };
  const handleQuesChange = (ques, id) => {
    setComponents((prevcomponents) => {
      const updatedComponents = [...prevcomponents];
      updatedComponents[id].data.question = ques;
      return updatedComponents;
    });
    console.log(mycomponents);
  };
  const handleAnsChange = (ans, id) => {
    setComponents((prevcomponents) => {
      const updatedComponents = [...prevcomponents];
      updatedComponents[id].data.ans = ans;
      return updatedComponents;
    });
  };
  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      {
        component: (
          <Faq
            handleAnsChange={handleAnsChange}
            handleQuesChange={handleQuesChange}
            key={prevComponents.length}
            id={prevComponents.length}
          />
        ),
        data: { question: "", ans: "" },
      },
    ]);
  };

  const uploadImages = async (path, file) => {
    await uploadImage(path, file);
  };
  const generateUrl = async (path) => {
    const url = await getUrl(path);
    return url;
  };

  return (
    <>
      <SideBar />
      <div className="bg-white rounded container my-5">
        <div className="inner p-5 px-5">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const images = await Promise.all(
                selectedImages.map(async (image, index) => {
                  const path = `descriptionImages/${
                    JSON.parse(getCookie("logindata")).userId
                  }/${new Date().getMilliseconds().toString() + index}`;

                  await uploadImages(path, image);
                  const url = await generateUrl(
                    `descriptionImages/${
                      JSON.parse(getCookie("logindata")).userId
                    }/${index}`
                  );
                  return { path: url, type: "ideaimage" };
                })
              );

              let faqs = mycomponents.map((comp) => {
                return comp.data;
              });
              setSelectedImages(images);
              const formdata = new FormData(e.target);
              const obj = {
                images: images,
                videoid: formdata.get("videoid"),
                description: description,
                faqs: faqs,
              };
              console.log(obj);
              setCookie("contentinfo", JSON.stringify(obj));

              navigate("/settings");
            }}
          >
            <label htmlFor="images" className="w-100">
              <div className="my-4">
                <H2WithToolTip heading={"Images"} />
                <ImageUploader
                  selectedImages={selectedImages}
                  setSelectedImages={setSelectedImages}
                />
              </div>
            </label>
            <div className="my-4">
              <label htmlFor="videoid" className="w-100">
                <H2WithToolTip heading={"Youtube Video URL"} />
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp my-3 w-75"
                    value={videoUrl}
                    onChange={(e) => {
                      setvideoUrl(e.target.value);
                    }}
                    name="videoid"
                    id="videoid"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setMounted(true);
                    }}
                    style={{ width: "15%" }}
                    className="ideavaultbtn h-50 ms-5 py-2 border-0 px-4"
                  >
                    Add
                  </button>
                </div>
              </label>

              {mounted && <YoutubeVideo id={videoUrl} />}
            </div>
            <div className="my-4 py-2">
              <H2WithToolTip heading={"Detailed Description"} />
              <Editor description={description} onchange={handleDescription} />
            </div>
            <div>
              <H2WithToolTip heading={"FAQ's"} />
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center">
                  {checkCookieExists("contentinfo")?.faq ? (
                    JSON.parse(getCookie("contentinfo")).faqs.map(
                      (faq, index) => {
                        return (
                          <Faq
                            key={index}
                            question={faq.question}
                            ans={faq.ans}
                          />
                        );
                      }
                    )
                  ) : (
                    <div></div>
                  )}
                </div>

                {mycomponents.map((comp, index) => (
                  <div key={index}>{comp.component}</div>
                ))}

                <button
                  className="bg-transparent text-center border-0 d-flex align-items-center"
                  type="button"
                  onClick={addComponent}
                >
                  <i className="fa-solid text-mustard text-stylish mx-2 fs-1 fa-circle-plus "></i>{" "}
                  Add FAQ
                </button>
              </div>
            </div>
            <hr className="mt-10  " />
            <div className="d-flex justify-content-center">
              <button
                className="formbtn bg-midnight-green"
                style={{ verticalAlign: "middle" }}
              >
                <span>Save & Continue </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Content;
