
const Description=({currSection,description})=>{
    return(
        <>
        <div className={`${(currSection == "description" ? "d-block" : "d-none") } container`}>
            <div className="row">
                <div className="col-xlg-6">
                    <div style={{border:"2px solid #07393c",height:"maxcontent"}}className="container-fluid m-2 p-3 ">
                        {description}
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
        </>

    );
}
export default Description;