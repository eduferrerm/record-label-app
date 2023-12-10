"use client";

import { useRef, useState } from "react";
import { transformCardWrapper, removeTransform } from "./HeroCarouselHelpers";

import HeroCarouselItem from "@/components/HomeHero/HeroCarousel/HeroCarouselItem";

const styles = {
  heroContainer: `relative min-w-screen flex min-h-screen flex-col justify-center bg-mds-grey-100 p-8 align-middle overflow-hidden`,
  carouselListItemsWrapper: `no-scrollbar absolute left-0 bottom-0 inline-flex gap-2 snap-x  transition-all duration-500`,
  cardItemDirectWrapper: `inline-flex gap-4 transition-all duration-500`,
  fullWidthContainer: {
    width: "100vw",
    marginLeft: "calc((100% - 100vw)/2)",
  },
};

interface HeroCarousel {
  bands: Band[];
}

export default function HeroCarousel({ bands }: HeroCarousel): React.ReactNode {
  const [itemIsExpanded, setitemIsExpanded] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardItemWrapperRef = useRef<HTMLDivElement>(null);

  const handleCarouselItemClick = (
    itemClicked?: HTMLDivElement | null,
  ): void => {
    const cardContainer = cardContainerRef.current;
    const cardItemWrapper = cardItemWrapperRef.current;

    setitemIsExpanded(!itemIsExpanded);

    console.log("bandData:", bands);

    if (
      itemClicked != null &&
      cardContainer != null &&
      cardItemWrapper != null
    ) {
      const containerPadding = parseInt(
        window.getComputedStyle(cardContainer).getPropertyValue("padding-left"),
      );

      if (itemIsExpanded) {
        removeTransform(cardItemWrapper);
      } else {
        transformCardWrapper(cardItemWrapper, itemClicked, containerPadding);
      }
    }
  };

  return (
    <div className={styles.heroContainer}>
      <header className="text-mds-grey-600">
        <h1 className="mb-4 font-mds-sans-cond-bold uppercase leading-none">
          Melo
          <br />
          humano
          <br />
          Records
        </h1>
        <h2 className="mb-4">Un santuario sonoro de mariposas y taras bruja</h2>
      </header>
      <div
        className={`${styles.carouselListItemsWrapper} ${
          itemIsExpanded ? "overflow-hidden" : "mb-8 overflow-x-auto px-8"
        }`}
        style={styles.fullWidthContainer}
        ref={cardContainerRef}
      >
        <div className={styles.cardItemDirectWrapper} ref={cardItemWrapperRef}>
          {bands.map((band) => (
            <HeroCarouselItem
              key={band.name}
              name={band.name}
              genres={band.genres}
              callback={handleCarouselItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
