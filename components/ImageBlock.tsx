import Image from "next/image";
import React from "react";

interface ImageAttributetype {
  src: string;
  width: number;
  height: string;
  border: string;
  rounded?: string;
  alt: string;
}

export default function ImageBlock(ImageAttribute: ImageAttributetype) {
  return (
    <>
      <Image
        src={ImageAttribute.src}
        alt={ImageAttribute.alt && ""}
        width={ImageAttribute.width}
      />
    </>
  );
}
