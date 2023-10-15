import { useRef, useState, useEffect, forwardRef } from "react";
import HeroCarouselItem from "@/components/Hero/HeroCarousel/HeroCarouselItem";

export default function HeroCarousel(): React.ReactNode {
  const mockDataBand = [
    {
      name: "VSTKO",
      genres: ["electronic", "grunge", "alternative"],
    },
    {
      name: "Wells",
      genres: ["grunge", "alternative", "psycodelic"],
    },
    {
      name: "Fotoconfetti",
      genres: ["brit", "orquestado", "cinematic"],
    },
  ];

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardContainer = cardContainerRef.current;

  const HeroCarousel = forwardRef(function HeroCarousel(props, ref) {});

  useEffect(() => {
    console.log("cardContainer:", cardContainer);
  }, [cardContainer]);

  return (
    <div
      className="no-scrollbar inline-flex snap-x gap-4 overflow-x-auto px-8"
      style={{
        width: "100vw",
        marginLeft: "calc((100% - 100vw)/2)",
      }}
      ref={cardContainerRef}
    >
      {mockDataBand.map((band) => (
        <HeroCarouselItem
          key={band.name}
          name={band.name}
          genres={band.genres}
          cardContainer={cardContainer}
        />
      ))}
    </div>
  );
}
