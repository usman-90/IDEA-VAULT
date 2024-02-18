


import axios from 'axios';

export const fetchReviews = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ideavault/getreviews');
    // console.log('response api', response);
    return response;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error; 
  }
};
