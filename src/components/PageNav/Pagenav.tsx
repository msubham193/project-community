import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Pagenav = () => {
  const path = usePathname();

  return (
    <Navbar.Content
      hideIn="xs"
      css={{
        bgBlur: "$accents1",
        padding: "0.7rem",
        borderRadius: "0.5rem",
        height: "auto",
        position: "fixed",
        top: "5rem",
        zIndex: 50,
        mw:"100%"
      }}
    >
      <Navbar.Item isActive={path === "/"}>
        <Link style={{ color: "inherit" }} href="/">
          Feed
        </Link>
      </Navbar.Item>
      <Navbar.Item isActive={path === "/foryou"}>
        <Link style={{ color: "inherit" }} href="/foryou">
          Foryou
        </Link>
      </Navbar.Item>
    </Navbar.Content>
  );
};

export default Pagenav;
