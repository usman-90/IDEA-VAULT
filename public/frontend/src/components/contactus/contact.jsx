import "./contact.css";
const Contact = () => {
  return (
    <section style={{backgroundColor:"#daeaf0"}} className="fifthsec py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xl-8 col-xxl-8 col-lg-8 ">
            <div className="rounded bg-light shadow d-flex justify-content-center flex-column b-1  my-3 form">
              <div className="contactbody d-flex flex-wrap justify-content-start align-items-start">
                <div className="d-flex flex-column p-3 flex-wrap">
                  <label
                    htmlFor="Name"
                    className="fs-4 my-3 d-flex flex-column"
                  >
                    Name
                    <input
                      placeholder="Name"
                      type="text"
                      className="contactinp "
                    />
                  </label>

                  <label
                    htmlFor="email"
                    className="fs-4 my-3 d-flex flex-column "
                  >
                    Email
                    <input
                      placeholder="Email"
                      type="email"
                      className=" contactinp "
                    />
                  </label>
                </div>
                <div className="p-3 ">
                  <label htmlFor="comment my-3">
                    <p className="fs-4 pb-0 mb-0 mt-3">Comment</p>
                    <textarea
                      name="comment"
                      className="contacttextarea"
                      id=""
                    ></textarea>
                  </label>
                </div>
              </div>
              <button
                style={{ margin: "1rem auto", width: "90%" ,border:"2px solid #07393c" }}
                className="btn-submit "
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-4 col-xl-4 col-xxl-4 col-lg-4">
            <div>
              <div>
                <div className="info w-100 bg-light form shadow rounded my-3 p-3">
                  <div className="py-1">
                    <h1 className="fs-4">Whats your story? Get in touch</h1>
                  </div>
                  <div className="py-3">
                    <p className="subhead fs-10">
                      Always available to write content for you.
                    </p>
                  </div>
                  <div className="py-3 d-flex justify-content-between align-items-center">
                    <i className="fs-2 color fa-regular fa-map"></i>
                    <span className="fs-10 fw-bold m-1 w-100 px-3">
                      Karachi, Pakistan.
                    </span>
                  </div>
                  <div className="py-3 d-flex justify-content-between align-items-center">
                    <i className="fs-2 color fa-regular fa-envelope"></i>
                    <span className="fs-8 fw-bold m-1 w-100 px-3">
                      nomansiddiqui12424@gmail.com
                    </span>
                  </div>
                  <div className="py-3 d-flex justify-content-between align-items-center">
                    <i className="fs-2 color fa-solid fa-mobile-button"></i>
                    <span className="fs-10 fw-bold m-1 w-100 px-3">
                      +92-340-1108632.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
