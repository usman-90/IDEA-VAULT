import axios from "axios";
export const fetchComments = async ({ queryKey }) => {
  console.log("comment chala be kutte")
  try{

    const  ideaid  = queryKey[1];
    console.log(ideaid,"ideaid");
    const res = await axios.get(
      `http://localhost:3000/ideavault/getcommentsandreplies/${ideaid}`,{params:{setNo:1}});
   
     console.log("response of fetch comments api", res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }

    
};

export const fetchFaq = async ({ queryKey }) => {
  const  ideaid  = queryKey[1];
  console.log(ideaid);
  const res = await fetch(
    `http://localhost:3000/ideavault/getideafaqs/${ideaid}`
  );
  if (!res.ok) {
    console.log("ops error");
  }
  return res.json();
};

export const fetchIdeaUpdates = async ({ queryKey }) => {
  try{

    const  ideaid  = queryKey[1];
    const res = await axios.get(`http://localhost:3000/ideavault/getideaupdates/${ideaid}`);
    // console.log("response of fetch idea updates api", res);
      return res;
    }
    catch (error) {
      console.error("Error:", error);
    }
  
};
