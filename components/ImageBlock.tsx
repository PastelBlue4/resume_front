import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

interface ImageAttributetype {
  data: {
    src: string;
    width: number;
    height: number;
    border: string;
    rounded?: string;
    alt: string;
  };
}

const StyledImageBlock = styled(Image)``;

export default function ImageBlock(ImageAttribute: ImageAttributetype) {
  return (
    <>
      <Image
        src="/moko.jpeg"
        alt={ImageAttribute.data.alt && ""}
        width={ImageAttribute.data.width}
        height={ImageAttribute.data.height}
      />
    </>
  );
}
