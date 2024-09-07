import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Tomoya Ogawa",
  description: "Tomoya Ogawa's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
