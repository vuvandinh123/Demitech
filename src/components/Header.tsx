import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";

import { NavigationMenuMain } from "@/components/NavigationMenuMain";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RetroGrid from "@/components/ui/retro-grid";

export default function Header() {
  return (
    <header className="flex-between relative py-5  text-black w-full">
      {/* logo */}
      <RetroGrid className="h-screen" />
      <div className="basis-1/3">
        <Image src={Logo} alt="" />
      </div>
      <div className="basis-1/3 rounded-full flex-center bg-gray-100">
        <NavigationMenuMain></NavigationMenuMain>
      </div>
      <div className="flex-center !justify-end basis-1/3 gap-2 ">
        <Select>
          <SelectTrigger className="w-[70px] outline-none ring-0 focus:ring-0 border-none">
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">EN</SelectItem>
            <SelectItem value="dark">VN</SelectItem>
          </SelectContent>
        </Select>
        <Button className="px-5 rounded-full bg-main hover:bg-blue-600">
          Get Started
        </Button>
      </div>
    </header>
  );
}
