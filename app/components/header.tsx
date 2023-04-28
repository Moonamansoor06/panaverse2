"use client";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { TiArrowDown } from "react-icons/ti";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  generateCoreLinks,
  generateSpecialLinks,
} from "../../utils/generateLinks";

export default function Nav() {
  const router = usePathname();
  const isSpecialPage = router.startsWith("/special/");
  const isCorePage = router.startsWith("/core/");
  const [coreLinks, setCoreLinks] = useState([]);
  const [specialLinks, setSpecialLinks] = useState([]);
  const path = "/core/[coreId]/";
  const linkRev = coreLinks.slice(0).reverse();
  useEffect(() => {
    async function fetchData() {
      const coreData = await generateCoreLinks();
      const specialData = await generateSpecialLinks();
      console.log("special data ", specialData);
      setCoreLinks(coreData);
      setSpecialLinks(specialData);
    }
    fetchData();
  }, []);
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
        fontWeight={["bold", "bold", "bold"]}
   
      >
        <BreadcrumbItem>
            <BreadcrumbLink href="/" 
             px="4"
             py="2"
             fontSize="md"
             border="none"
             borderRadius="md"
             width="20"
           bg="transparent"
           _hover={{ bg: "green.100" }}
           _expanded={{ bg: "blue.100" }}
          _focus={{ boxShadow: "outline" }}
            >Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
          <Menu>
        
        <MenuButton
          as={Button}
          py="2"
          fontSize="md"
          rightIcon={<TiArrowDown />}
          bg="transparent"
          _hover={{ bg: "green.100" }}
          _expanded={{ bg: "blue.100" }}
          _focus={{ boxShadow: "outline" }}
        >
          Courses
        </MenuButton>
        <MenuList>
          {isCorePage &&
            linkRev.map((link: any) => {
              console.log(link.href);
              return (
                <MenuItem key={link.coreId}>
                  <Link href={link.href}>{link.label} </Link>
                </MenuItem>
              );
            })}
          {isSpecialPage &&
            specialLinks.map((link: any) => {
              return (
                <MenuItem key={link.specialId}>
                  <Link href={link.href}>{link.name}</Link>
                </MenuItem>
              );
            })}{" "}
        </MenuList>
      </Menu>
      </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
