const Comment=()=>{
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-md-6">
                    <div  style={{height:"15rem"}}className="container-fluid border border-solid-primary">
                        <div className="header container-fluid d-flex gap-3 my-3" >
                            <div>
                                <img  style={{width:"4rem",height:"4rem",borderRadius:"4rem"}}className="img-fluid" src="../images/edu2.jpg" alt="oo" />
                            </div>
                            <div  className="d-flex flex-column border-bottom-solid-primary">
                            <h5> <strong>By Rajja farhan</strong></h5>
                            <h6> rajjafarhan@gamil.com</h6>
                            <h6 className="fs-6">wednesday,9:00 pm</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>


        </div>
    )
}
export default Comment;