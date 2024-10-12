import Link from "next/link";
import React from "react";
import img1 from "@/public/simcard.png";
import img2 from "@/public/monitor.png";
import img3 from "@/public/driver.png";
import Image from "next/image";
export default function Challenge() {
  return (
    <section className="my-10">
      <h2 className="text-3xl text-center">
        We have multidisciplinary teams to meet any{" "}
        <Link className="text-main" href="/challenge">
          challenge
        </Link>
        .
      </h2>
      <div className=" p-5 shadow-section rounded-3xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="px-5">
            <div className="mb-7">
              <Image src={img2} alt="" />
            </div>
            <p className="text-xl font-semibold my-2">Front-end</p>
            <p className="text-gray-500">
              Our frontend developers understand the delicate balance between
              aesthetics and functionality.{" "}
            </p>
          </div>
          <div className="px-5">
            <div className="mb-7">
              <Image src={img1} alt="" />
            </div>
            <p className="text-xl font-semibold my-2">Back-end</p>
            <p className="text-gray-500">
              Our backend developers are the architects of efficiency and
              security. They design and build the databases andAPIs.
            </p>
          </div>
          <div className="px-5">
            <div className="mb-7">
              <Image src={img3} alt="" />
            </div>
            <p className="text-xl font-semibold my-2">Data Analysts</p>
            <p className="text-gray-500">
              Our data analytics team is a blend of mathematicians,
              statisticians, and technology enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
