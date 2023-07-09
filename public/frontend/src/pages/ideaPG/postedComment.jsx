import "./postedcomment.css"
const Postedcomment=()=>{
const commentarr=[{comments:"hey this is my very first comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my first reply too"}},{comments:"hey this is my very second comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my second reply too"}},{comments:"hey this is my very third comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my third reply too"}},{comments:"hey this is my very fourth comment",reply:{replytime:'9:00pm',replyday:'wednesday',replymsg:"thats my fourth reply too"}}]
console.log(commentarr.comment)
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
                <i className="fa-regular fa-thumbs-up"></i>
                <i className="fa-sharp fa-regular fa-thumbs-down"></i>
                <p style={{cursor:"pointer"}}><b>Reply</b> </p>
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