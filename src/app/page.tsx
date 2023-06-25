"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card, Container, Grid, Navbar, Text } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import CustomFeed from "@/components/Feed/CustomFeed";
import GeneralFeed from "@/components/Feed/GeneralFeed";
import Loading from "@/components/Loading";
import Link from "next/link";
import Pagenav from "@/components/PageNav/Pagenav";
import CommunityCard from "@/components/Community/CommunityCard";

export default function Home() {
  const { data: session, status } = useSession();

  if (status == "loading") return <Loading />;

  const MockItem = ({ text }: { text: string }) => {
    return "hjvvh";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Pagenav />
      <Grid.Container
        gap={1}
        justify="center"
        css={{ minHeight: "100vh", padding: "1rem" }}
      >
        <Grid xs={8} css={{ background: "" }}>
          {status == "authenticated" ? <CustomFeed /> : <GeneralFeed />}
        </Grid>
        <Grid xs={4}>
          <CommunityCard />
        </Grid>
      </Grid.Container>
    </div>
  );
}
