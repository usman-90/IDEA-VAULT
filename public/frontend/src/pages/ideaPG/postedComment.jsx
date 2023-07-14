/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react"
import "./postedcomment.css"



const Replybox=({setreply,reply,setreplydisplay})=>{

  

  const sendreply=()=>{
    setreply("");
    setreplydisplay(false)
  };
  const handleChangeOfReply=(e)=>{
    setreply(e.target.value)
  }
 
  
  return(
    <div style={{flexDirection:"row",width:"100%"}} className="d-flex" >

                <textarea style={{width:"100%"}} value={reply}  className="reply-box p-2" placeholder="Write your comment..."  onChange={handleChangeOfReply}/><div >
              <i
                  className="fa-regular fa-paper-plane"
                  style={{ color: "grey", cursor: "pointer", fontSize: "1.3rem",marginTop:"16px",marginLeft:"5px" }}
                  onClick={sendreply}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "grey")}
                  ></i>
              </div>
                </div>

  )
};


const Postedcomment=()=>{
const commentarr=[{comments:"hey this is my very first comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my first reply too"}},{comments:"hey this is my very second comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my second reply too"}},{comments:"hey this is my very third comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my third reply too"}},{comments:"hey this is my very fourth comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my fourth reply too"}}]
console.log(commentarr.comment)
const [reply,setreply]=useState("")
const [replydisplay,setreplydisplay]=useState(false)
const [likescolor,setlikescolor]=useState("");

    return(

        <div className="row my-4">
        <div className="col-xlg-6">
            <div style={{border:"2px solid #07393c"}}className="container-fluid  my-2"> 
            <div style={{border:"2px solid #07393c",backgroundColor:"#07393c",color:"white"}} className=" container-fluid d-flex gap-2 py-1 my-2  ">
              <div>
                <img style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="img-fluid mx-2" src="../images/edu.jpg" alt="oo" />
              </div>
              <div style={{ justifyContent: "space-between" ,alignItems:'center'}} className="container-fluid d-flex commentheader">
              <h6 style={{ fontSize: ".9rem" }}>rajjafarhan@gamil.com</h6>
               <h6 style={{ fontSize: ".9rem" }} className="">wednesday, 9:00 pm</h6>
            </div>

            </div>
            <div className="container-fluid">
              <div className="container-fluid ">
                <p style={{height:"maxcontent"}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, tempora sequi. Cumque porro vero reiciendis deserunt, voluptas suscipit, natus eligendi vitae ut placeat nesciunt ipsam esse hic corrupti quos commodi sequi qui id. Odio quis totam deserunt reiciendis quo accusantium! lorem50</p>
                <div className="d-flex gap-3 my-2">
                <i onClick={()=>{
                  setlikescolor("blue")
                }} className={`${likescolor=="blue"? 'activelikescolor':''} fa-solid fa-thumbs-up`}><span>30</span></i>
                <i   onClick={()=>{
                  setlikescolor("red")
                }} className={`${likescolor=="red"? 'activedislikescolor':''} fa-sharp fa-solid fa-thumbs-down`}></i>
                <p style={{cursor:"pointer"}} onClick={()=>{
                  setreplydisplay(true)
                }}><b>Reply</b> </p>
                {replydisplay==true && <Replybox setreplydisplay={setreplydisplay} setreply={setreply} reply={reply}/>}

                
                  </div>

              </div>

{/* /////////////////////////////////////////////reply/////// */}

              <div style={{height:"maxcontent",marginLeft:"9%",width:"90%"}}  className="container d-flex flex-column  ">
                  <div style={{border:"2px solid #07393c",backgroundColor:"#07393c",color:"white"}}className=" d-flex gap-2 py-1   my-2 ">
                  <div >
                    <img style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="img-fluid mx-2" src="../images/edu.jpg" alt="oo" />
                  </div>
                  <div style={{ justifyContent: "space-between" ,alignItems:'center'}} className="container-fluid d-flex commentheader">
                  <h6 style={{ fontSize: ".8rem" }}>rajjafarhan@gamil.com</h6>
                  <h6 style={{ fontSize: ".9rem" }} className="">wednesday, 9:00 pm</h6>
                </div>

                </div>
                  <p style={{ width:"90%",height:"maxcontent"}}>learningorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, similique? Praesentium cumque, ipsum incidunt reprehenderit voluptas inventore consequatur fuga enim.</p>
              </div>

            </div>


            </div>
        </div>
        <div className="col-lg-6">
            
        </div>
      </div>

)
}
export default Postedcomment;