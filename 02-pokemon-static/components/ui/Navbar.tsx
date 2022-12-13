import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import { SmallPokeball } from "./";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme?.colors.gray50.value,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        padding: "0px 20px",
        width: "100%",
        height: '80px'
      }}
    >
      <NextLink href="/" passHref legacyBehavior>
        <a style={{ display: "flex" }}>

            <SmallPokeball />

        </a>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref legacyBehavior>
        <a>
          <Text color="white" h3>
            {" "}
            Favoritos{" "}
          </Text>
        </a>
      </NextLink>
    </div>
  );
};
