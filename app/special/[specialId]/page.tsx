"use client";
import { useState, useEffect } from "react";
import fetchSpecDesc from "@/utils/fetchSpecDesc";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Box, Heading, Text, Link, Mark, Stack } from "@chakra-ui/react";

interface SpecialDescProps {
  specialId: string;
  descriptrion: string;
  details: any;
  q5descriptrion: string;
  q5details: any;
}

export default function GetSpecialDesc({
  params,
}: {
  params: SpecialDescProps;
}) {
  const specialId = params.specialId as string;

  const [specDesc, setSpecDesc] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const desc = await fetchSpecDesc(specialId);

        setSpecDesc(desc.items[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [specialId]);

  if (!specDesc) {
    return <div>Loading...</div>;
  }
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <Text lineHeight="taller" fontSize="md" fontFamily="body">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Heading fontSize="xl" textColor="green.900" fontFamily="heading">
          {children}
        </Heading>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => (
        <Link textAlign="left" href={node.data.uri}>
          {children}
        </Link>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <Link
          fontSize="md"
          fontFamily="cursive"
          fontStyle="italic"
          textColor="GrayText"
          textDecoration="underline"
          href={node.data.uri}
        >
          {children}
        </Link>
      ),
    },
  };
  const details4 = specDesc.fields.details;
  const desc4 = specDesc.fields.description;
  const details5 = specDesc.fields.q5details;
  const desc5 = specDesc.fields.q5description;

  return (
    <Box
      marginLeft="2"
      marginRight="2"
      paddingBottom={["24", "24", "24", "24"]}
      height={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}>
      
        <Box
          boxShadow="md"
          bgGradient="linear(to-br, green.100, white,white ) "
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        >
          <Heading size="xl" mt="2" textColor="green.900" fontFamily="heading">
            Quarter 4
          </Heading>
          <Heading size="md" mt="2" textColor="green.900" fontFamily="maincomp">
            Course Duration: 13 Weeks
          </Heading>
          <Mark
            fontSize="xl"
            mt="2"
            fontWeight="bold"
            fontFamily="heading"
            textColor="gray.900"
          >
            Course Description:
          </Mark>
          <Text fontFamily="body">{desc4}</Text>
          <Stack alignItems="left" mt="4">
            <Mark
              fontSize="md"
              mt="2"
              fontWeight="bold"
              fontFamily="heading"
              textColor="gray.900"
            >
              Course Outline:{" "}
            </Mark>
            <Box> {documentToReactComponents(details4, options)}</Box>
          </Stack>{" "}
        </Box>
      


        <Box
          boxShadow="md"
          bgGradient="linear(to-br, green.100, white,white ) "
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        >
          <Heading size="xl" mt="8" textColor="green.900" fontFamily="heading">
            Quarter 5
          </Heading>
          <Heading size="md" mt="2" textColor="green.900" fontFamily="mainComp">
            Course Duration: 13 Weeks
          </Heading>
          <Mark
            mt="2"
            fontSize="xl"
            fontWeight="bold"
            fontFamily="heading"
            textColor="gray.900"
          >
            Course Description:{" "}
          </Mark>
          <Text fontFamily="body">{desc5}</Text>

          <Stack alignItems="left" mr="2">
            <Text
              fontSize="xl"
              fontWeight="bold"
              fontFamily="heading"
              textColor="gray.900"
            >
              Course Outline:{" "}
            </Text>
            <Box> {documentToReactComponents(details5, options)}</Box>
          </Stack>
        </Box>
      
    </Box>
  );
}
