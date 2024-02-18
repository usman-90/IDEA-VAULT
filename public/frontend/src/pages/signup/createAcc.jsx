// export const createAccount = async (data) => {
  
//   const option = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   const result = await fetch("http://localhost:3000/signup",option);
//   if (!result.ok){
//     console.log("ops error")
//     return;
//   }
//   return result.json()
// };


import axios from 'axios';

export const createAccount = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/signup', data);

    return response.data;
    
  } catch (error) {
    console.error('Error:', error);
  }
};
