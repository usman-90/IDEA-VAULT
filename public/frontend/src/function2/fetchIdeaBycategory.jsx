

  import axios from "axios";

const fetchIdeaByCategory = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    const apiRes = await axios.get(`http://localhost:3000/ideavault/getideabycategory/${id}`);
    console.log("response of fetch idea by category api", apiRes);
      return apiRes;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchIdeaByCategory;
