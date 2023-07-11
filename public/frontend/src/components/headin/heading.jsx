const Heading = ({ text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          lineHeight: "1em",
          textTransform: "uppercase",
          marginTop: "3rem",
          marginBottom:"3rem",
          borderBottom:"3px solid #fed766"
        }}
        className="text-center text-midnight-green"
      >
        {text}
      </h2>
    </div>
  );
};

export default Heading;
