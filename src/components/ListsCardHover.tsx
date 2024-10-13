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
        <svg
          id="sw-js-blob-svg"
          className="w-52 left-[25%] -top-10 absolute"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
              {" "}
              <stop
                id="stop1"
                stopColor="rgba(248, 117, 55, 1)"
                offset="0%"
              />{" "}
              <stop
                id="stop2"
                stopColor="rgba(251, 168, 31, 1)"
                offset="100%"
              />{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M24.7,-31.7C31.2,-29.3,35.1,-21,34.9,-13.3C34.7,-5.6,30.4,1.4,25.9,6.4C21.5,11.3,16.9,14.1,12.5,16.5C8.2,18.9,4.1,21,0.2,20.7C-3.7,20.4,-7.3,17.8,-13.1,15.8C-18.9,13.8,-26.8,12.6,-31,8.1C-35.3,3.6,-35.8,-4.1,-34,-11.5C-32.2,-18.8,-28.1,-25.9,-22,-28.4C-15.9,-31,-8,-29.1,0.6,-29.9C9.1,-30.6,18.2,-34.1,24.7,-31.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth={0}
            style={{ transition: "0.3s" }}
          />{" "}
        </svg>
      </div>
      <div className="relative z-10">
        <HoverEffect items={projects} className="my-5 z-10" />
      </div>
    </div>
  );
}
