import H2WithToolTip from "./h2withtooltip";
import Editor from "./editor";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdate } from "../../functions/update";
import { useToasts } from 'react-toast-notifications';
const IdeaUpdate = () => {
  const [description, setDecription] = useState();
  const { ideaid } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const handleUpdate = async (ideaid, description) => {
    const data = {
      description,
      ideaid,
    };
    const res = await postUpdate(data);
    console.log(res);
    addToast('Profile Updated Successfully! ', {
        appearance: 'success',
        autoDismiss: true,
      });
    navigate(`/ideadetail/${ideaid}`);
  };

  const handleChange = (val) => {
    setDecription(val);
  };
  console.log(description);

  return (
    <div>
      <div className="bg-white rounded container my-5 pb-5">
        <h1 className="text-center pt-5">Share Updates About Your Idea</h1>
        <div className="inner p-5 px-5">
          <div className="my-4 py-2">
            <H2WithToolTip heading={"Update Description"} />
            <Editor onchange={handleChange} description={description} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="formbtn bg-midnight-green"
            style={{ verticalAlign: "middle" }}
            onClick={() => {
              handleUpdate(ideaid, description);
            }}
          >
            <span>Post Update </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaUpdate;
