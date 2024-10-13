import React from "react";
import vecImg from "@/public/Vector 4.svg";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import {
  logoGoogle,
  logoLg,
  logoMicrosoft,
  logoSamsung,
  logoSony,
} from "@/public/index";
export default function Technologies() {
  const img = [logoGoogle, logoLg, logoMicrosoft, logoSamsung, logoSony];
  return (
    <div className="p-5 rounded-2xl bg-[#F7F7FD]">
      
      <div className="flex justify-center my-10">
        <div className="flex-center">
          <div className="text-center">
            <h2 className="flex-center text-3xl gap-2">
              <Image width={50} src={vecImg} alt="" />
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600 m-auto w-2/3 mt-1 text-sm text-center">
              Our 4,000+ team has expertise in almost everyprogramming language.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Marquee pauseOnHover className="[--duration:20s] ">
          {img.map((item, index) => (
            <div key={index} className="p-5">
              <Image width={200} key={index} src={item} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
