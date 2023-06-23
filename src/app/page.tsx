"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Button.Group size="lg" flat>
      <Button isFocusVisible>One</Button>
      <Button>Two</Button>
    </Button.Group>
  );
}
