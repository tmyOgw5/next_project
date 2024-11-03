"use client";
import { Container, Flex, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Header = () => {
  return (
    <Box
      py={4}
      bgColor="transparent"
      position="fixed"
      top={0}
      left={0}
      right={0}
      width="100vw"
      zIndex="999"
    >
      <Container maxW="100vw">
        <Flex justify="space-between" align="center">
          {/* ロゴ */}
          <Link href="/" fontSize={20} color="#222222" fontWeight="normal">
            Tomoya Ogawa
          </Link>
          {/* ナビゲーションメニュー */}
          <Flex>
            <Link
              href="/"
              color="#222222"
              mx={4}
              fontWeight="normal"
              fontSize={16}
            >
              Home
            </Link>
            <Link
              href="/works"
              color="#222222"
              mx={4}
              fontWeight="normal"
              fontSize={16}
            >
              Works
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
