import Comment from "./comment";

const DetailNav=()=>{
    return(
        <>
        <div className="container"> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  

      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Description</a>
        <a className="nav-link" href="/">FAQs</a>
        <a className="nav-link" href="/">Updates</a>
        <a className="nav-link" href="/">Comment</a>
        
     
    </div>
  </div>
</nav>
</div>
<Comment/>

        </>
    )
}
export default DetailNav;