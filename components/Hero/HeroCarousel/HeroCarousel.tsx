import { useRef, useState, BaseSyntheticEvent } from "react";
import { mockDataBand } from "@/mockData";
import {
  calcAndMoveLeft,
  calcAndMoveRight,
  removeTransform,
} from "./HeroCarouselHelpers";

import HeroCarouselItem from "@/components/Hero/HeroCarousel/HeroCarouselItem";

type Header = {
  children: React.ReactNode;
};

export default function HeroCarousel({ children }: Header): React.ReactNode {
  const [itemIsExpanded, setitemIsExpanded] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardItemWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const styles = {
    heroContainer: `relative min-w-screen flex min-h-screen flex-col justify-center bg-slate-900 p-8 align-middle overflow-hidden`,
    carouselListItemsWrapper: `no-scrollbar absolute left-0 bottom-0 inline-flex gap-2 snap-x  transition-all duration-500 ${
      itemIsExpanded ? "overflow-hidden" : "mb-8 px-8 overflow-x-auto"
    }`,
    fullWidthContainer: {
      width: "100vw",
      marginLeft: "calc((100% - 100vw)/2)",
    },
    cardItemDirectWrapper: `inline-flex gap-4 transition-all duration-500`,
  };

  const handleCarouselItemClick = (
    itemClicked?: HTMLDivElement | null,
  ): void => {
    const cardContainer = cardContainerRef.current;
    const cardItemWrapper = cardItemWrapperRef.current;
    const header = headerRef.current;

    setitemIsExpanded(!itemIsExpanded);

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
        if (itemClicked.getBoundingClientRect().x > 0) {
          // console.log("itemClicked x:", itemClicked.getBoundingClientRect().x);

          calcAndMoveLeft(cardItemWrapper, itemClicked, containerPadding);
        } else if (itemClicked.getBoundingClientRect().x <= 0) {
          calcAndMoveRight(cardItemWrapper, itemClicked, containerPadding);
        }
      }
    }
  };

  return (
    <div className={styles.heroContainer}>
      <header ref={headerRef}>{children}</header>
      <div
        className={styles.carouselListItemsWrapper}
        style={styles.fullWidthContainer}
        ref={cardContainerRef}
      >
        <div className={styles.cardItemDirectWrapper} ref={cardItemWrapperRef}>
          {mockDataBand.map((band) => (
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
