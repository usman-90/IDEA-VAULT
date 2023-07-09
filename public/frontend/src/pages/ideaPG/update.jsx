const Update = ({currSection}) =>{
    return (
        <>
        <div className={`${(currSection == "update" ? "d-block" : "d-none") } container`}>
            <div className="row">
                <div className="col-xlg-6">
                    <div style={{border:"2px solid #07393c",height:"maxcontent"}}className="container-fluid m-2 p-3 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia nisi excepturi molestiae minima facilis eius tempora. Doloremque quo itaque consequuntur culpa aliquid pariatur, quaerat harum in temporibus velit nostrum.
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
        </>
    )
}

export default Update;