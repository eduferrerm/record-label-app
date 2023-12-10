"use client";

import { ReactNode } from "react";
import HeroCarousel from "@/components/HomeHero/HeroCarousel/HeroCarousel";

export default function HomeHero() {
  const HeroHeader: ReactNode = (
    <section className="text-mds-grey-600" id="test">
      <h1 className="mb-4 font-mds-sans-cond-bold uppercase leading-none">
        Melo
        <br />
        humano
        <br />
        Records
      </h1>
      <h2 className="mb-4">Un santuario sonoro de mariposas y taras bruja</h2>
    </section>
  );

  return <HeroCarousel>{HeroHeader}</HeroCarousel>;
}
