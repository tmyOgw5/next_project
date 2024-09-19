import React, { CSSProperties } from "react";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const appStyle: CSSProperties = {
    backgroundColor: "#FFFFFF",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxStyle: CSSProperties = {
    backgroundColor: "transparent",
    width: "70vw",
    top: "80px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box
          position="absolute"
          style={boxStyle}
          boxSize={{ base: "70%", sm: "70%", md: "70%", lg: "50%" }}
        >
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  );
}
