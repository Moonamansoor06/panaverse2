"use client";
import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function ImgRotator({ timerLength = 3000 } = {}) {
  const [currIndex, setCurrIndex] = useState(0);

  const slides: string[] = [
    "/img/img4.jpg",
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img5.jpg",
    "/img/img6.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrIndex((currIndex + 1) % slides.length),
      timerLength
    );

    return () => clearTimeout(timer);
  }, [currIndex]);

  return (
    <Image
      style={{ display: "flex", justifyContent: "flex-end" }}
      objectFit="cover"
      src={slides[currIndex]}
      key={currIndex}
      alt=""
      width={800}
      height={400}
    />
  );
}
