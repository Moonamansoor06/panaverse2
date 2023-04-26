"use client";
import {
  Grid,
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteButton from "./routeButton";

export interface Core {
  fields: {
    coreId: string;
    name: string;
    pic: {
      sys: {
        id: string;
      };
    };
  };
}

export default function CoreCourse() {
  const [data, setData] = useState<{ items: Core[]; includes: any }>({
    items: [],
    includes: {},
  });

  useEffect(() => {
    async function fetchSpecial() {
      try {
        const res = await fetch(
          `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=coreCourses`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSpecial();
  }, []);

  const revData = data.items.slice(0).reverse();

  const router = useRouter();

  return (
    // main container of the component
    <Box
      id="core"
      marginTop={["4", "4", "10", "10"]}
      marginLeft="2"
      marginRight="2"
      marginBottom={["2", "24", "24"]}
      paddingTop={["2", "20", "20"]}
      
      bgGradient="linear(to-br, green.100, white,white,white ) "
    >
      {/* headings stack */}
      <Stack alignItems="left">
        <Heading size="2xl" pt="10">
          Core Courses
        </Heading>
        <Text size="md" fontWeight="bold">
          Common in all specializations
        </Text>
      </Stack>
      {/* course details */}
      <Grid
        marginTop="20"

        w="68"
        gap={["2","2","4","4"]}
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr",
        }}
      >
        {revData.map((d: Core, i: number) => {
          return (
            <Box marginTop="2" mr="2" ml="2" key={i} height="auto" boxShadow="dark-lg" mb="20">
              {data.includes.Asset.map((a: any, i: number) => (
                <Stack key={i}>
                  {d.fields.pic.sys.id == a.sys.id && (
                    <>
                      <Image
                        src={"https:" + a.fields.file.url}
                        alt=""
                        height={150}
                        width="100%"
                        objectFit="cover"
                      />
                    </>
                  )}
                </Stack>
              ))}

              <Stack mt="4" p="4" >
                <Button
                  borderRadius="lg"
                  alignSelf="right"
                  color="green.700"
                  bgColor="green.100"
                  w="32"
                  variant="link"
                  p="2"
                  onClick={() => {
                    router.push(`/core/${d.fields.coreId}`);
                  }}
                >
                  Course Details
                </Button>
                <Heading fontFamily="heading" size="md">
                  Quarter :{i + 1}
                </Heading>
                <Text fontFamily="body" fontWeight="bold">
                  Quarter Id: {d.fields.coreId}
                </Text>
                <Text fontFamily="body" fontWeight="bold">
                  Name: {d.fields.name}
                </Text>
              </Stack>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
