"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Loading,
  Navbar as Nav,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";
import { GoogleIcon } from "./ui/Icons/GoogleIcon";

const SunIcon = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};
const Navbar = () => {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const segment = useSelectedLayoutSegment();
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();
  if (status === "loading") {
    return <Loading />;
  }
  // useEffect(() => {
  //   console.log(user);
  // });
  return (
    <Nav variant="floating"  isCompact>
      <Nav.Brand>
        <Nav.Toggle
          aria-label="toggle navigation"
          showIn="sm"
          style={{ paddingRight: 12 }}
        />

        <svg
          viewBox="0 0 24 24"
          style={{ height: 32 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33318 2C8.22861 2 7.33331 2.89731 7.33331 4.00388C7.33305 4.26677 7.38457 4.52714 7.48493 4.77012C7.58529 5.0131 7.73252 5.23393 7.91823 5.42001C8.10393 5.60609 8.32447 5.75377 8.56725 5.85462C8.81002 5.95546 9.07029 6.0075 9.33318 6.00777H11.3334V4.00388C11.3338 3.47292 11.1233 2.96353 10.7482 2.58774C10.3731 2.21194 9.86414 2.00053 9.33318 2ZM9.33318 7.34369H3.99987C2.8953 7.34369 2 8.241 2 9.34791C2 10.4545 2.8953 11.3518 3.99987 11.3518H9.33351C10.4377 11.3518 11.3334 10.4545 11.3334 9.34791C11.3334 8.241 10.4377 7.34369 9.33318 7.34369Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
          <path
            d="M22 9.34791C22 8.241 21.1044 7.34369 19.9998 7.34369C18.8952 7.34369 17.9999 8.241 17.9999 9.34791V11.3518H19.9998C20.5308 11.3513 21.0398 11.1398 21.4149 10.7641C21.79 10.3883 22.0004 9.87887 22 9.34791ZM16.6667 9.34791V4.00388C16.6671 3.47292 16.4567 2.96353 16.0816 2.58774C15.7065 2.21194 15.1974 2.00053 14.6665 2C13.5619 2 12.6666 2.89731 12.6666 4.00388V9.34757C12.6666 10.4548 13.5619 11.3521 14.6665 11.3521C15.1974 11.3516 15.7065 11.1402 16.0816 10.7644C16.4567 10.3886 16.6671 9.87887 16.6667 9.34791Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
          <path
            d="M14.6665 22.0395C15.1974 22.039 15.7065 21.8276 16.0816 21.4518C16.4567 21.076 16.6671 20.5666 16.6667 20.0356C16.6671 19.5047 16.4567 18.9953 16.0816 18.6195C15.7065 18.2437 15.1974 18.0323 14.6665 18.0317H12.6666V20.0356C12.6666 21.1422 13.5619 22.0395 14.6665 22.0395ZM14.6665 16.6958H20.0001C21.1044 16.6958 22 15.7985 22 14.6916C22.0004 14.1606 21.79 13.6512 21.4149 13.2754C21.0398 12.8997 20.5308 12.6882 19.9998 12.6877H14.6665C13.5619 12.6877 12.6666 13.585 12.6666 14.6916C12.6664 14.9545 12.7179 15.2149 12.8182 15.4578C12.9186 15.7008 13.0658 15.9216 13.2515 16.1077C13.4372 16.2938 13.6578 16.4415 13.9006 16.5423C14.1433 16.6432 14.4036 16.6956 14.6665 16.6958Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
          <path
            d="M2 14.6916C1.99974 14.9545 2.05126 15.2149 2.15162 15.4578C2.25198 15.7008 2.39921 15.9216 2.58492 16.1077C2.77062 16.2938 2.99116 16.4415 3.23394 16.5423C3.47671 16.6432 3.73698 16.6952 3.99987 16.6955C4.53083 16.6949 5.03984 16.4835 5.41494 16.1077C5.79004 15.732 6.00051 15.2226 6.00007 14.6916V12.6877H3.99987C2.8953 12.6877 2 13.585 2 14.6916ZM7.33331 14.6916V20.0353C7.33331 21.1422 8.22861 22.0395 9.33318 22.0395C9.86414 22.039 10.3731 21.8276 10.7482 21.4518C11.1233 21.076 11.3338 20.5666 11.3334 20.0356V14.6916C11.3336 14.4287 11.2821 14.1683 11.1817 13.9253C11.0814 13.6823 10.9341 13.4614 10.7483 13.2754C10.5626 13.0893 10.342 12.9416 10.0992 12.8408C9.85639 12.7399 9.5961 12.6879 9.33318 12.6877C8.22861 12.6877 7.33331 13.585 7.33331 14.6916Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
        </svg>
        <Text b color="inherit" hideIn="xs" style={{ paddingLeft: 10 }}>
          Community
        </Text>
      </Nav.Brand>
      <Nav.Content hideIn="xs">
        <Nav.Item isActive={segment === null}>
          <Link style={{ color: "inherit" }} href="/">
            Feed
          </Link>
        </Nav.Item>
        <Nav.Item isActive={segment === "foryou"}>
          <Link style={{ color: "inherit" }} href="/foryou">
            Foryou
          </Link>
        </Nav.Item>
      </Nav.Content>
      <Nav.Content>
        <Nav.Collapse>
          <Nav.CollapseItem>
            <Link
              style={{
                minWidth: "100%",
                color: "inherit",
                fontWeight: segment === null ? "bold" : "normal",
              }}
              href="/"
            >
              Feed
            </Link>
          </Nav.CollapseItem>
          <Nav.CollapseItem>
            <Link
              style={{
                minWidth: "100%",
                color: "inherit",
                fontWeight: segment === "foryou" ? "bold" : "normal",
              }}
              href="/foryou"
            >
              Foryou
            </Link>
          </Nav.CollapseItem>
        </Nav.Collapse>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOff={<SunIcon />}
          iconOn={<MoonIcon />}
        />
        {session ? (
          <Dropdown placement="bottom-right">
            <Badge
              disableOutline
              content=""
              color="success"
              placement="bottom-left"
              shape="circle"
              variant="dot"
              size="md"
            >
              {user?.image ? (
                <Dropdown.Trigger>
                  <Avatar
                    src={user?.image as string}
                    zoomed
                    bordered
                    color="gradient"
                  />
                </Dropdown.Trigger>
              ) : (
                <Avatar text={user?.name?.charAt(0) as string} zoomed />
              )}
            </Badge>

            <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>

              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                <div onClick={() => signOut()}> Log Out</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button
            icon={<GoogleIcon />}
            flat
            color="primary"
            auto
            animated
            onClick={() => signIn("google")}
            css={{
              color: "white",
              "@smMax": {
                display: "none",
              },
            }}
          >
            Login
          </Button>
        )}
      </Nav.Content>
    </Nav>
  );
};

export default Navbar;
