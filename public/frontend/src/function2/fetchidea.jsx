const fetchIdea = async ( ) => {
   
    const apiRes = await fetch(`http://localhost:3000/ideavault/getallideas`);
  
    if (!apiRes.ok) {
      throw new Error(`idea fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchIdea;