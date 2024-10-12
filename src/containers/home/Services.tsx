import React from "react";
import img from "@/public/Vector 6.svg";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import ListsCardHover from "@/components/ListsCardHover";
export default function Services() {
  return (
    <section className="my-10 mt-20">
      <BlurFade className="flex-center">
        <h2 className="flex-center w-1/2 text-3xl gap-2">
          <Image width={50} src={img} alt="" />
          <span className="block w-3/4">
            Empowering Your Digital Vision: Our Comprehensive Tech Services.
          </span>
        </h2>
      </BlurFade>
      <div className="">
        <ListsCardHover></ListsCardHover>
      </div>
    </section>
  );
}
