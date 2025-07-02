
// app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   </>
  );
}
