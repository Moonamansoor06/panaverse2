"use client"
import { useState, useEffect } from 'react';
import fetchCoreDesc from '@/utils/fetchCoreDesc';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Box, Heading, Text,Link, Mark,Stack } from '@chakra-ui/react';
//import { fetchCoreDesc } from '../utils/contentful';

interface CoreDescProps {
    coreId:string;
  courseDetail: string;
  description: string;
}



export default function GetDesc({ params }: {
  params: CoreDescProps,
}) {
  const coreId = params.coreId as string;
  const [coreDesc, setCoreDesc] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const desc = await fetchCoreDesc(coreId);
        setCoreDesc(desc.items[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [coreId]);

  if (!coreDesc) {
    return <div>Loading...</div>;
  }
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node:any, children:any) => <Text textAlign="justify" lineHeight="taller" fontSize="lg" fontFamily="body">{children}</Text>,
      [BLOCKS.HEADING_3]: (node:any, children:any) => <Heading fontSize="xl" textColor="green.900" fontFamily="heading">{children}</Heading>,
      [INLINES.ENTRY_HYPERLINK]: (node:any, children:any) => <Link textAlign="left" href={node.data.uri}>{children}</Link>,
      [INLINES.HYPERLINK]: (node:any, children:any) => <Link fontSize="md" fontFamily="cursive" fontStyle="italic" textColor="GrayText" textDecoration="underline" href={node.data.uri}>{children}</Link>,
    },
  };
  const details = coreDesc.fields.courseDetail;
  const desc = coreDesc.fields.description;

  return (
    <Box
   
    marginLeft="2"
    marginBottom={["2", "24", "24"]}
    height={{ base: "full", sm: "full", md: "full", lg: "full" }}
    width={{ base: "95%", sm: "95%", md: "98%", lg: "98%" }}
    paddingTop={["2", "20", "20"]}
    bgGradient= 'linear(to-br, green.100, white,white ) '>
      <Stack alignItems="left" ml="2" mr="2">
      <Heading  size="xl" textColor="green.900" fontFamily="fantasy">Course Duration: 13 Weeks</Heading>
      <Text fontFamily="body"><Mark fontSize="xl" fontWeight="bold" fontFamily="heading" textColor="gray.900">
        Course Description: </Mark>{desc}</Text>
      
     </Stack>
     <Stack alignItems="left" mt="2" ml="2" mr="2">
      <Text fontFamily="body"><Mark fontSize="xl" fontWeight="bold" fontFamily="heading" textColor="gray.900">
        Course Outline: </Mark></Text>
     <Box> {documentToReactComponents(details,options)}</Box>
    </Stack></Box>
  );
}

  