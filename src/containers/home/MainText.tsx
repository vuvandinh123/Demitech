import React from "react";
import image from "@/public/mainimage.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
export default function MainText() {
  return (
    <section className="flex-center relative">
      <div className="basis-1/3 ">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="text-yellow-500 ">TECH SERVICES </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-6xl mt-3 ">
            TechSynergy: Innovate, Create, Elevate
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="mt-3 text-gray-500">
            Unlocking Possibilities, One Code at a Time
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY}>
          <Button className="px-5 rounded-full bg-main hover:bg-blue-600 mt-5 ">
            Get Started
          </Button>
        </BlurFade>
      </div>
      <div className="basis-2/3 relative">
        <BlurFade>
          <div className="bg-gradient-to-r absolute inset-0 from-white to-transparent  right-1/3"></div>
          <Image className="w-full h-full rounded-2xl" src={image} alt="" />
        </BlurFade>
      </div>
    </section>
  );
}
