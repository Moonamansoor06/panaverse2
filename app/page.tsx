"use client";
import { Stack,Flex } from "@chakra-ui/react";
import CoreCourse from "./components/coreCourses";
import HomeComponent from "./components/homeComponent";
import SpecializedTracks from "./components/specializedTracks";

export default function Home() {
  return (
  <Stack >
     
      <HomeComponent />
      <CoreCourse />
      
      <SpecializedTracks />
     
   </Stack>   
     
    
  );
} {/* <Flex   mt="4"  height={["full","full","auto","auto"]}> </Flex> */}