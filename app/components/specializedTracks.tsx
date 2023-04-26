"use client";
import {
  Flex,
  Grid,
  Heading,
  Text,
  Box,
  GridItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SpecialData {
  fields: {
    specialId: string;
    name: string;
    description: string;
    quarter4Id: string;
    quarter4: string;
    quarter5Id: string;
    quarter5: string;

    pic: {
      sys: {
        id: string;
      };
    };
  };
}

export default function SpecializedTracks() {
  const router = useRouter();
  const [idSelected, setIdSelected] = useState<string>("web3");

  const [data, setData] = useState<{ items: SpecialData[]; includes: any }>({
    items: [],
    includes: {},
  });

  useEffect(() => {
    async function fetchSpecial() {
      try {
        const res = await fetch(
          `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=specialCourse`,
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

  return (
    // main container
    <Box id="special"
    marginTop={["4", "4", "10", "10"]}
      marginLeft="2"
      marginRight="2"
      marginBottom={["2", "24", "24"]}
      height="auto"   
      paddingTop={["2", "20", "20"]}
      bgGradient="linear(to-br, green.100, white,white,white ) "
    >
      {/* headings stack */}
      <Stack alignItems="left" ml="2" mr="2">
        <Heading fontFamily="heading" size="2xl" id="special">
          Specialized Tracks
        </Heading>
        <Text size="md" fontFamily="body" fontWeight="bold">
          After completing three core quarters select specialization
        </Text>
      </Stack>
      {/* content started with main grid */}
     
      <Grid
        marginTop={{ base: "2", sm: "2", md: "20" }}
        h="96"
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        templateRows={{ base: "auto auto", md: "auto" }}
        gap={4}
      >
        {/* box for course Details */}
        <Box
          gridColumn={{ base: "1 / 2", md: "1 / 2" }}
          gridRow={{ base: "1 / 2", md: "auto" }}
          p="2"
          ml="2"
          mr="2"
          mb="10"
          
        >
{/* stack for description and headings */}
         
          {data.items.map((d: SpecialData, i: number) => {
            if (d.fields.specialId === idSelected) {
              return (
                <Stack key={i}>
                   <Stack>
                  <Heading size="lg" fontFamily="heading" fontWeight="bold">
                    {d.fields.name}
                  </Heading>
                  <Text fontFamily="heading" fontWeight="bold">
                    Description:
                  </Text>
                  <Text fontFamily="body">{d.fields.description}</Text>
                  <Button
                    borderRadius="lg"
                    alignSelf="right"
                    color="green.700"
                    bgColor="green.100"
                    w="32"
                    variant="link"
                    p="2"
                    onClick={() => {
                      router.push(`/special/${d.fields.specialId}`);
                    }}
                  >
                    Course Details
                  </Button>
                </Stack>
                  <Flex flexDirection={["column","column","row","row"]}
                   h={["72","72","72","72"]}     gap={["2","2","4","4"]} w="98%" >
                    <Stack mt="4" p="10" boxShadow="dark-lg" h="48">
                      <Text fontFamily="heading" fontWeight="extrabold">
                        Quarter 4:
                      </Text>
                      <Text fontFamily="body" fontWeight="bold">
                        {d.fields.quarter4Id}: {d.fields.quarter4}
                      </Text>
                    </Stack>
                    <Stack mt="4"p="10"   boxShadow="dark-lg" h="48">
                      <Text fontFamily="heading" fontWeight="extrabold">
                        Quarter 5:
                      </Text>
                      <Text fontFamily="body" fontWeight="bold">
                        {d.fields.quarter5Id}: {d.fields.quarter5}
                      </Text>
                    </Stack>
                  </Flex>
                  </Stack>
          )}})}
                          
        </Box>

        {/* list of special courses */}
        <Box
        p="2"
          gridColumn={{ base: "1 / 2", md: "2 / 3" }}
          gridRow={{ base: "2 / 3", md: "auto" }}
          overflowY={{ base: "initial", md: "scroll" }}
       
          pt={["20","20","5","5"]}
          pb="28"
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          {data.items.map((d: any, i: number) => {
            return (
              <Stack key={i} boxShadow="dark-lg" mb="4">
                {data.includes.Asset.map((a: any) => (
                  <>
                    {d.fields.pic.sys.id == a.sys.id && (
                      <Image
                        src={"https:" + a.fields.file.url}
                        alt=""
                        height={150}
                        width="100%"
                        objectFit="cover"
                      />
                    )}
                  </>
                ))}

                <Stack
                  mt="4"
                  padding="2"
                  cursor="pointer"
                  onClick={() => {
                    setIdSelected(d.fields.specialId);
                  }}
                >
                  <Text textAlign="left" size="lg">
                    {d.fields.name}
                  </Text>
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Grid>
    
    </Box>
  );
}
