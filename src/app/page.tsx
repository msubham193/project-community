"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card, Grid, Loading, Text } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);

  const MockItem = ({ text }: { text: string }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <MockItem text="1 of 2" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="2 of 2" />
      </Grid>
    </Grid.Container>
  );
}
