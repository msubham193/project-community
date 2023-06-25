import {
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Row,
  Text,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import PostBox from "../Post/PostBox";

const CustomFeed = () => {
  const posts = [
    {
      id: 1,
      title: "ALl Time SRH XI",
      img: "https://external-preview.redd.it/b2kbr5DVahJ0bsacVSVW4HKo-yaynXfsFxjX-Pe0CQs.jpg?width=640&crop=smart&auto=webp&v=enabled&s=0b950ae6586bc6b1a44b928d8e814b57546e1e92",
      avatar:
        "https://styles.redditmedia.com/t5_t1xem/styles/communityIcon_5t3hobu74bo81.png?width=256&v=enabled&s=2bf80f53df40dc8e5e69f38bd9a76351e6eb1416",
      name: "SunrisersHyderabad",
    },
    {
      id: 2,
      title: "Allahabadis after today's baarish",
      img: "https://preview.redd.it/lz2z44czjt7b1.png?width=640&crop=smart&auto=webp&v=enabled&s=38bfab6f0d9dc48cb41f6d073c171f4210ada6a2",
      avatar:
        "https://styles.redditmedia.com/t5_329pr/styles/communityIcon_0gppbitq1n781.JPG",
      name: "Allahabad",
    },
  ];

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {posts.map((post) => (
        <PostBox
          key={post.id}
          img={post.img}
          avatar={post.avatar}
          name={post.name}
          title={post.title}
         
        />
      ))}
    </Container>
  );
};

export default CustomFeed;
