import { Button, Card, Container, Spacer, Text, User } from "@nextui-org/react";
import React from "react";

const CommunityCard = () => {
  return (
    <Card
      variant="bordered"
      css={{ mw: "350px", mh: "90%", position: "fixed", top: "10rem" }}
    >
      <Card.Header>
        <Text b>Community</Text>
      </Card.Header>
      <Card.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {" "}
          <User
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            name="c/chatGPT"
            size="md"
            description="2k members"
          />
          <Button size="sm" bordered auto color="gradient" rounded>
            follow
          </Button>
        </div>

        <Card.Divider/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          {" "}
          <User
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            name="c/chatGPT"
            size="md"
            description="2k members"
          />
          <Button size="sm" bordered auto color="gradient" rounded>
            follow
          </Button>
        </div>

        <Card.Divider/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          {" "}
          <User
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            name="c/chatGPT"
            size="md"
            description="2k members"
          />
          <Button size="sm" bordered auto color="gradient" rounded>
            follow
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommunityCard;
