"use client"
import Pagenav from "@/components/PageNav/Pagenav";
import { Container, Grid } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <Pagenav />
      <Grid.Container
        gap={2}
        justify="center"
        css={{ minHeight: "100vh", padding: "2rem" }}
      >
        <Grid xs={8}>bdfjkdvgfe</Grid>
        <Grid xs={4}>dbsdkjbd</Grid>
      </Grid.Container>
    </Container>
  );
};

export default page;
