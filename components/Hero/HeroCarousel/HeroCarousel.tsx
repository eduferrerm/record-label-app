import { useRef, useState, useEffect, BaseSyntheticEvent } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCarouselItemClick = (event: BaseSyntheticEvent): void => {
    const cardContainer = cardContainerRef.current;
    const cardItemClicked = event.target;

    if (cardItemClicked !== null && cardContainer !== null) {
      cardItemClicked.ontransitionend = () => {
        const cardItemOffsetX = cardItemClicked?.getBoundingClientRect().x;
        const cardItemOffsetY = cardItemClicked?.getBoundingClientRect().y;

        window.scrollTo({
          top: cardItemOffsetY,
          behavior: "smooth",
        });

        console.log("cardItemOffsetX:", cardItemOffsetX);
        console.log("cardItemOffsetY:", cardItemOffsetY);
        cardContainer.scrollLeft = cardItemOffsetX < 0 ? 0 : cardItemOffsetX;
      };
      // disable scroll
    }
  };

  return (
    <div
      className="no-scrollbar inline-flex snap-x gap-4 overflow-x-auto px-8 transition-all"
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
          callback={handleCarouselItemClick}
        />
      ))}
    </div>
  );
}
