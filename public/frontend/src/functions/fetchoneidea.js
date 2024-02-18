import axios from "axios";
export const fetchOneIdea = async ({ queryKey }) => {
  try{
    const ideaid = queryKey[1];

    const res = await axios.get(`http://localhost:3000/ideavault/getoneidea/${ideaid}`);
    // console.log("response of fetch one idea api", res);
    return res;
  }
 
  catch (error) {
    console.error("Error:", error);
  }

};
