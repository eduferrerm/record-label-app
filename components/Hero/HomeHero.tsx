"use client";

import { ReactNode } from "react";

import HeroCarousel from "@/components/Hero/HeroCarousel/HeroCarousel";

export default function HomeHero() {
  const HeroHeader: ReactNode = (
    <>
      <h1 className="mb-4 text-white">Madremusica</h1>
      <h2 className="mb-4 text-white">
        Un santuario sonoro de mariposas y taras bruja
      </h2>
    </>
  );

  return <HeroCarousel>{HeroHeader}</HeroCarousel>;
}
