/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import vec6 from "@/public/Vector 6.svg";
import Globe from "@/components/ui/globe";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import CardFeed from "@/components/CardFeed";
export default function FeedBack() {
  const cards = Array(10)
    .fill(0)
    .map((card, index) => <CardFeed key={index}></CardFeed>);
  return (
    <section className="my-10">
      <div className="grid relative grid-cols-1 md:grid-cols-3 gap-5">
        <Image className="absolute left-[28%] -z-10" src={vec6} alt="" />
        <div className="relative">
          <Globe></Globe>
        </div>
        <div className="p-5 col-span-2">
          <h3 className="text-3xl">
            We've stopped counting. Over 500 brands count on us.
          </h3>
          <p className="text-gray-500 mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro unde
            ullam excepturi ipsam libero adipisci atque quas, pariatur natus
            dolorum voluptatibus delectus, aut debitis est assumenda fugit quam
            doloribus vitae!
          </p>
          <div>
            <Carousel items={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
