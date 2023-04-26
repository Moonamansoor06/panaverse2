"use client";
import { Flex, Stack, Box, Heading, Text, Mark } from "@chakra-ui/react";
import ImgRotator from "./imgRotator";
import RouteButton from "./routeButton";
//  import { useRouter } from 'next/navigation';
export default function HomeComponent() {
  //const router=useRouter()
  return (
    // main container
    <Box
      id="home"
      marginTop={["4", "4", "10", "10"]}
      marginLeft="2"
      marginRight="2"
      marginBottom={["2", "24", "24"]}
      height="auto"   
      paddingTop={["2", "20", "20"]}
    >
{/* internal container having both right and left side boxes */}
      <Flex
        direction={["column", "column", "row", "row"]}
        height="auto"
        id="home"
      >
        {/* left side box */}
        <Box flex={[1, 1, 3 / 5, 3 / 5]}>
          <Stack >
            <Heading size={["xl", "xl", "2xl", "2xl"]} fontFamily="heading">
              Certified Web 3.0
            </Heading>
            <Heading size={["xl", "xl", "2xl", "2xl"]} fontFamily="heading">
              & Metaverse Developer
            </Heading>
            <Text
              fontSize="xl"
              color="green.700"
              fontFamily="mainComp"
              fontWeight="bold"
              textAlign="justify"
              lineHeight="8"
              padding="2"
            >
              by: Presidential Initiative for Artificial Intelligence and
              Computing (PIAIC)
            </Text>
            <Text
              mt="4"
              fontSize="xl"
              fontFamily="body"
              fontWeight="bold"
              textAlign="justify"
              lineHeight="8"
              padding="2"
            >
              A One Year program{" "}
              <Mark fontFamily="body" fontWeight="extrabold" color="green.700">
                Panaverse DAO
              </Mark>{" "}
              divided in 5 quarters Allows to Earn as you Learn by introducing
              the Next Generation of the Internet
            </Text>
            <Text
              fontSize="xl"
              fontFamily="body"
              fontWeight="bold"
              textAlign="justify"
              lineHeight="8"
              padding="2"
            >
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </Text>
            <Stack mt="4" display="flex" alignSelf="left" maxW="48" maxH="10">
              <RouteButton
                color="green.700"
                bgColor="green.100"
                buttonName="Admissiom website"
                url="https://www.piaic.org/"
              />
            </Stack>{" "}
          </Stack>
        </Box>
{/* right side box */}
        <Box
          pt="4"
          
          flex={[1, 1, 2 / 5, 2 / 5]}
          alignSelf={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
          }}
        >
          <ImgRotator />
        </Box>
      </Flex>
    </Box>
  );
}
