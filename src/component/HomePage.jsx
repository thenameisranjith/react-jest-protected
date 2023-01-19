import { useState } from "react";
import Button from "react-bootstrap/Button";
const HomePage = () => {
  const theme = {
    darkTheme: {
      color: "white",
      background: "black",
      border: "1px solid white",
    },
    whiteTheme: {
      background: "#ffe042",
      color: "black",
      border: "1px solid #ffe042",
    },
  };

  const [isBackGround, isSetBackGround] = useState(true);

  return (
    <>
      <br />
      <Button
        variant={isBackGround ? "dark" : "Light"}
        onClick={() => isSetBackGround(!isBackGround)}
      >
        Change Theme
      </Button>{" "}
      <br />
      <br />
      <div style={isBackGround ? theme.darkTheme : theme.whiteTheme}>
        <p
          style={{
            margin: "10px",
            padding: "10px",
            justifyContent: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};

export default HomePage;
