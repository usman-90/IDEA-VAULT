const Heading = ({ text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2
        style={{
          fontSize: "2em",
          fontWeight: 800,
          lineHeight: "1em",
          textTransform: "uppercase",
          marginTop: ".9em",
          marginBottom:".5em"
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Heading;
