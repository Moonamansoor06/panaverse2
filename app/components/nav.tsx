import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
} from "@chakra-ui/react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Nav() {
  return (
    
      <Flex direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      top="0"
      left="0"
      right="0"
      width={{ [312]:"100%", base: "100%",sm:"100%",md:"full", lg: "full" }} 
      >
        <Image src="/logo.png" alt="" ml="2" mt="2" boxSize={[10, 10, 20]} />
        <Spacer width="20%" />
        <Breadcrumb
          paddingTop="5"
          paddingRight="1"
          fontWeight={["small", "small", "medium"]}
          fontSize={["x-small", "x-small", "medium"]}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#core ">Core Tracks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#special ">Specialized Tracks</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    
    );
}
