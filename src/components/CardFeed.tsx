/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";
import React from "react";

export default function CardFeed() {
  return (
    <div className="w-[350px] border rounded-2xl shadow-section p-6">
      <div className="mb-5">
        <div className="flex gap-2 items-center">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </div>
      </div>
      <div className="mb-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum
          aspernatur praesentium dolores dicta veritatis dolorum nam distinctio
          animi amet ea, deserunt delectus architecto aliquam sapiente eveniet
          velit culpa molestias.
        </p>
      </div>
      <hr />
      <div className="flex gap-3 mt-5">
        <div className="shrink-0">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="rounded-full w-[50px] h-[50px]"
          />
        </div>
        <div>
          <h4 className="font-bold">VU VAN DINH</h4>
          <p className="text-gray-500 text-sm mt-2">
            CEO of TechCraft Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
