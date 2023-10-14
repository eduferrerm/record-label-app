"use client";

import HeroCarousel from "@/components/Hero/HeroCarousel/HeroCarousel";

export default function Hero() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-slate-900 p-8 align-middle">
      <h1 className="mb-4 text-white">Madremusica</h1>
      <h2 className="mb-4 text-white">
        Un santuario sonoro de mariposas y taras bruja
      </h2>
      <HeroCarousel />
    </div>
  );
}
