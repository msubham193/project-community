import React from "react";
import { Container, Loading as Load } from "@nextui-org/react";
const Loading = () => {
  return (
    <Container
      css={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Load size="lg" />
    </Container>
  );
};

export default Loading;
