import {
  Avatar,
  Card,
  Container,
  Image,
  Popover,
  Spacer,
  Text,
  theme,
} from "@nextui-org/react";
import React from "react";
import IconGroup from "../IconGroup";
import { UserTwitterCard } from "../UserTwitterCard";

interface MyComponentProps {
  title: string;
  img: string;
  avatar: string;
  name: string;
}

const PostBox = (props: MyComponentProps) => {
  return (
    <Card
      isHoverable
      variant="bordered"
      
      css={{ mw: "70%", h: "fit-content", mt: "2.5rem" }}
    >
      <Card.Body
        css={{
          background: "$accents0",
        }}
      >
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            gap: "$5",
            mb: "1.3rem",
          }}
        >
          <Popover>
            <Popover.Trigger>
              <Avatar src={props.avatar} zoomed size="sm" />
            </Popover.Trigger>
            <Popover.Content>
              <UserTwitterCard src={props.avatar} title={props.name} />
            </Popover.Content>
          </Popover>

          <Text weight="extrabold" size={13}>
            c/{props.name}
          </Text>
          <Text
            size={12}
            css={{
              color: "$accents9",
            }}
          >
            Posted by Subham mishra 2 hours ago
          </Text>
        </Container>
        <Container css={{ maxWidth: "inherit" }}>
          <Text size={18}>{props.title}</Text>
          <Image
            src={props.img}
            alt="Img can't load"
            css={{
              marginTop: "12px",
              borderRadius: "0.7rem",
              maxHeight: "50%",
              maxWidth: "100%",
            }}
          />
          <IconGroup />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PostBox;
