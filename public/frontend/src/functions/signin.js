


import axios from 'axios';

export const signin = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/login', data);
    // console.log('response api', response)
    
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
