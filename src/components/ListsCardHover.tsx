"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import VecImg1 from "@/public/Vector 4.svg";
import vecImg2 from "@/public/Vector 6.svg";
import docCode from "@/public/document-code.svg";
import vecSetting from "@/public/setting-5.svg";
import vecData from "@/public/data.svg";
import vecBlur from "@/public/brush.svg";
import vecMobie from "@/public/mobile.svg";
import vecShapes from "@/public/shapes.svg";

import Image from "next/image";
export default function ListsCardHover() {
  const projects = [
    {
      title: "Custom SoftwareDevelopment",
      description:
        "Create custom software tailored for your unique needs, including front-end, and core back-end technology..",
      link: "https://stripe.com",
      image: docCode,
    },
    {
      title: "QA and Testing",
      description:
        "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
      link: "https://netflix.com",
      image: vecSetting,
    },
    {
      title: "AI and Data Science",
      description:
        "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
      link: "https://google.com",
      image: vecData,
    },
    {
      title: "UX/UI Design",
      description:
        "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
      link: "https://meta.com",
      image: vecBlur,
    },
    {
      title: "Mobile App Development",
      description:
        "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
      link: "https://amazon.com",
      image: vecMobie,
    },
    {
      title: "Platform and Infrastructure",
      description:
        "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
      link: "https://microsoft.com",
      image: vecShapes,
    },
  ];
  return (
    <div className="relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={VecImg1}
          width={100}
          alt=""
          className=" absolute -z-10 left-[60%] top-1/3  object-cover"
        />
        <Image
          width={100}
          src={vecImg2}
          alt=""
          className=" absolute -z-10 left-[30%] top-2/3   object-cover"
        />
      </div>
      <div className="relative z-10">
        <HoverEffect items={projects} className="my-5 z-10" />
      </div>
    </div>
  );
}
