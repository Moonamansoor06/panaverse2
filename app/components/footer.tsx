import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <Flex
      as="footer"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="4rem"
      backgroundColor="gray.200"
      width={["100%", "100%", "100%"]}
      marginTop="20"
      padding="15"
        bgGradient="linear(to-r, green.200, blue.500)" 
         alignContent="space-between"
        justifyContent="space-between "
    >
      
      
      
        <Text>@panaverse.co</Text>
        <nav
          style={{
            padding: "4",
            marginTop:"4",
            width: "30%",
            display: "flex",
            flexDirection: "row",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="https://www.facebook.com/groups/panaverse">
            {" "}
            <TiSocialFacebook />
          </Link>
          <Link href="https://twitter.com/Panaverse_edu">
            {" "}
            <TiSocialTwitter />
          </Link>
          <Link href="https://www.youtube.com/@panaverse/streams">
            {" "}
            <BsYoutube />
          </Link>
          <Link href="https://github.com/panaverse">
            {" "}
            <SiGithub />
          </Link>
        </nav>
      
    </Flex>
  );
}
