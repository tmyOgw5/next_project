import React, { CSSProperties } from "react";
import { Box, Flex } from "@chakra-ui/react";
import HeaderContents from "../components/HeaderContents";

export default function Home() {
  const appStyle: CSSProperties = {
    backgroundColor: "#F8F8F4", // 好きな背景色を指定
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxStyle: CSSProperties = {
    backgroundColor: "transparent",
    width: "90vw",
    height: "100%",
    top: "80px",
    borderRadius: "20px",
    display: "flex",
    margin: "auto",
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle}>
          <HeaderContents />
        </Box>
      </Flex>
    </React.Fragment>
  );
}
