import React from "react";
import vecImg from "@/public/Vector 4.svg";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
export default function Technologies() {
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
        <Marquee pauseOnHover className="[--duration:20s]">
          <div>
            <img src="https://i0.wp.com/timoday.edu.vn/wp-content/uploads/2020/01/java.jpg?fit=256%2C256&ssl=1?v=1641581387" alt="" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOgcDhF3YAyREbp0xe4-QLF61A5DIIXUwSw&s" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
