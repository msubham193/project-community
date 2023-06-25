import { Container, theme, useTheme } from "@nextui-org/react";
import React from "react";
import { UpVoteIcon } from "./ui/Icons/UpVoteIcon";
import DownVoteIcon from "./ui/Icons/DownVoteIcon";
import { CommentIcon } from "./ui/Icons/CommentIcon";
import ShareIcon from "./ui/Icons/ShareIcon";
import SaveIcon from "./ui/Icons/SaveIcon";

const IconGroup = () => {
  const { isDark } = useTheme();
  const height = 22;
  const width = 22;
  return (
    <Container
      css={{ display: "flex", flexDirection: "row", gap: "2rem", mt: "1rem" }}
    >
      <UpVoteIcon
        fill={isDark ? "#B2B2B2" : "black"}
        onClick={""}
        height={height}
        width={width}
      />
      <DownVoteIcon
        fill={isDark ? "#B2B2B2" : "black"}
        onClick={""}
        height={height}
        width={width}
      />
      <CommentIcon
        fill={isDark ? "#B2B2B2" : "black"}
        onClick={""}
        height={height}
        width={width}
      />
      <ShareIcon
        fill={isDark ? "#B2B2B2" : "black"}
        onClick={""}
        height={height}
        width={width}
      />
      <SaveIcon
        fill={isDark ? "#B2B2B2" : "black"}
        onClick={""}
        height={height}
        width={width}
      />
    </Container>
  );
};

export default IconGroup;
