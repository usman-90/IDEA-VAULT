import "./ideacard.css";
const IdeaCard = ({
    ideaName,
    ideaCardDesc,

    cardimage,
    ideaCategory,
    ideaDate,
}) => {
    console.log(cardimage);
    return (
        <div className="my-5">
            <article className="article-wrapper my-2 ">
                <img className="container-project rounded-lg" src={cardimage === "req.body.cardImage" || cardimage === "cardImage" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp2QN2WCx7VRAXuJme-AcdxJJeXRSM3obFhXX_uIKvQ&s" : cardimage} alt="" />
                <div className="project-info">
        <div>
                    <div className="flex-pr">
                        <div className="project-title text-nowrap">{ideaName}</div>

                        <div className="project-hover">
                            <svg
                                style={{ color: "black" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                color="black"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <line y2="12" x2="19" y1="12" x1="5"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div className="text-xs">{ideaCardDesc?.length > 120 ? ideaCardDesc?.slice(0,115) + "..." : ideaCardDesc}</div>
        </div>
                    <div className="types">
                        <span
                            style={{
                                backgroundColor: "#2c6663",
                            }}
                            className="project-type"
                        >
                            {ideaCategory}
                        </span>
                        <span
                            style={{
                                backgroundColor: "#2c6663",
                                color: "f4d77f",
                            }}
                            className="project-type px-3"
                        >
                            {new Date(ideaDate)?.toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default IdeaCard;
