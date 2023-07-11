import YouTube from "react-youtube";
const YoutubeVideo = ({ id }) => {
  const opts = {
    height: "460",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {id ? (
        <YouTube videoId={id} opts={opts} />
      ) : (
        <div>
          <h3>No video Selected</h3>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideo;
