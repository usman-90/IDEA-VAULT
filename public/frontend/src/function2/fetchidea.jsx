import axios from "axios";
const fetchIdea = async ( ) => {
   try{
    const apiRes = await axios.get(`http://localhost:3000/ideavault/getallideas`,{params:{pageNo:1}});
    // console.log("response api", apiRes);
    return apiRes
   }
    
    catch (error) {
      console.error("Error:", error);
    }
  }
  
export default fetchIdea;


