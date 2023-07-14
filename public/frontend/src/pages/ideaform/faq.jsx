const Faq = ({handleQuesChange, handleAnsChange,id}) => {


  return (
    <div className="faq my-3 w-100 d-flex flex-wrap">
      <div className="my-2 me-3">
          <h6>Question</h6>
          <textarea
            placeholder="   Type here..."
            className="rounded"
            type="text"
            onChange={(e)=> {handleQuesChange(e.target.value,id)}}
          />
      </div>
      <div className="my-2 ">
          <h6>Answer</h6>
          <textarea
            placeholder="   Type here..."
            className="rounded"
            type="text"
            onChange={(e)=> {handleAnsChange(e.target.value,id)}}

          />
      </div>
    </div>
  );
};

export default Faq;
