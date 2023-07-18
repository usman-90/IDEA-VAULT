import { useQuery } from "@tanstack/react-query";
import { checkCookieExists, getCookie } from "../../helpers/cookies";
import { getIdeasByUserId } from "../../functions/votes";
import { formatTime } from "../../helpers/formatTime";
import { useParams } from "react-router-dom";
import { setVisiblity } from "../../functions/visinlity";

const Visibility = () => {
  const { userid } = useParams();
  
  let userideas;
  if (checkCookieExists("logindata")) {
    const userid = JSON.parse(getCookie("logindata")).userId;

    const ideasRes = useQuery(["useridea", userid], getIdeasByUserId);
    if (ideasRes.isLoading) {
      console.log("user ideas laoding");
    }
    userideas = ideasRes?.data?.row;
    console.log(userideas);
  }
  const hanldeVisiblity = async (ideaid) => {
    const data = {
      userid: userid,
      ideaid,
    };
    const res = await setVisiblity(data);
    console.log(res);
  };
  return (
    <div>
      <div className="container">
        <div
          className="ideahead_z py-3"
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          Assign the visiblity of your Ideas below
        </div>

        <div className="w-100 ">
          <table className="p-5 mb-5 bg-white shadow mx-auto w-75">
            <thead>
              <tr>
                <th className="p-3 bg-mustard text-center fs-5">Idea id</th>
                <th className="p-3 bg-mustard text-center fs-5">Title</th>
                <th className="p-3 bg-mustard text-center fs-5">Tagline</th>
                <th className="p-3 bg-mustard text-center fs-5"> Amount</th>
                <th className="p-3 bg-mustard text-center fs-5">Posted Date</th>
                <th className="p-3 bg-mustard text-center fs-5"> Visiblity</th>
              </tr>
            </thead>
            {userideas
              ? userideas.map((idea) => {
                  return (
                    <tbody key={idea.ideaid}>
                      <tr className="shadow">
                        <td
                          className=" py-4 bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {idea.ideaid}
                        </td>
                        <td
                          className="py-4    bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {idea.ideatitle}
                        </td>
                        <td
                          className="py-4  bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {idea.ideatagline}
                        </td>
                        <td
                          className="py-4  bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {idea.requiredamount}
                        </td>
                        <td
                          className="py-4  bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {formatTime(idea.postedat)}
                        </td>
                        <td
                          className="py-4   bg-light text-center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          <button
                            onClick={() => {
                              hanldeVisiblity(idea.ideaid);
                            }}
                            className="btn btn-danger"
                          >
                            Allow
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
