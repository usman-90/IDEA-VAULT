const Userprofiledetail=()=>{
    const profilearr={profilesrc:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80",bio:"hello,thisis mybio i wan to update it ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae adipisci corporis maiores reprehenderit quo sint earum praesentium voluptatem, natus asperiores possimus corrupti quis, qu",firstName:"Rajja",Lastname:"Farhan",country:"Canada",fblink:"www.fb.com",instalink:"www.insta.com",twitterlink:"www.twitter.com",linkdin:"www.linkdin.com ",totalideas:8}
    return(

        <div style={{backgroundColor:"#daeaf0"}} className="container py-5 px-5">
        <div className="row">
            <div className="col-md-6">
                <div >

                <img style={{height:"15rem",width:"75%" ,border:"2px solid black"}}src={profilearr.profilesrc} alt="" />
                <h3 className="my-3">BIO</h3>
                <p style={{height:"maxcontent"}} className="my-1">{profilearr.bio}</p>
                </div>
            </div>
            <div style={{border:"2px solid #07939c"}}className="col-md-6 py-2">
               <div className="mx-5 py-3">
                <h2  className="fs-2">About Me</h2>
                <div className="d-flex   my-3">
                    <img style={{height:"4rem",width:"4rem",borderRadius:"4rem"}} src={profilearr.profilesrc} alt="ooo" />
                    <div style={{display:"flex",flexDirection:"column"}} className="mx-3">
                        <h5 className="fs-5">{profilearr.firstName} {profilearr.Lastname}</h5>
                        <h5 className="fs-5">{profilearr.country}</h5>
                    </div>
                </div>
                <h2>Socials</h2>
                <div>
                   <ul style={{textDecoration:"none"}}>
                    <li style={{listStyleType:"none"}}><a href="/"style={{color:"black"}}><i
                        style={{ color: "blue" ,marginRight:"1rem" }}
                        className="fa-brands fa-facebook"
                      ></i>{profilearr.fblink}</a></li>
                      <li style={{listStyleType:"none"}}><a href="/" style={{color:"black"}}>
                      <i
                        style={{ color: "red",marginRight:"1rem" }}
                        className="fa-brands fa-instagram"
                      ></i>{profilearr.instalink}
                    </a></li>
                    <li style={{listStyleType:"none"}}> <a href="/" style={{color:"black"}}>
                      <i
                        style={{ color: "blue",marginRight:"1rem" }}
                        className="fa-brands fa-twitter"
                      ></i>{profilearr.twitterlink}
                    </a></li>
                    <li style={{listStyleType:"none"}}> <a href="/" style={{color:"black"}}> 
                      <i
                        style={{ color: "blue" ,marginRight:"1rem"}}
                        className="fa-brands fa-linkedin mr-2"
                      ></i>{profilearr.linkdin}                    
                      </a></li>

                   </ul>
                </div>


                
               </div>
            </div>
        </div>
    </div>
        )
}
export default Userprofiledetail;