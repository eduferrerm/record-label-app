import { useRef, useState } from "react";
import { mockDataBand } from "@/mockData";
import { transformCardWrapper, removeTransform } from "./HeroCarouselHelpers";

import HeroCarouselItem from "@/components/Home_Hero/HeroCarousel/HeroCarouselItem";

const styles = {
  heroContainer: `relative min-w-screen flex min-h-screen flex-col justify-center bg-mds-grey-100 p-8 align-middle overflow-hidden`,
  carouselListItemsWrapper: `no-scrollbar absolute left-0 bottom-0 inline-flex gap-2 snap-x  transition-all duration-500`,
  cardItemDirectWrapper: `inline-flex gap-4 transition-all duration-500`,
  fullWidthContainer: {
    width: "100vw",
    marginLeft: "calc((100% - 100vw)/2)",
  },
};

type Header = {
  children: React.ReactNode;
};

export default function HeroCarousel({ children }: Header): React.ReactNode {
  const [itemIsExpanded, setitemIsExpanded] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardItemWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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
        transformCardWrapper(cardItemWrapper, itemClicked, containerPadding);
      }
    }
  };

  return (
    <div className={styles.heroContainer}>
      <header ref={headerRef}>{children}</header>
      <div
        className={`${styles.carouselListItemsWrapper} ${
          itemIsExpanded ? "overflow-hidden" : "mb-8 overflow-x-auto px-8"
        }`}
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
              recentActivity={band.recentActivity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
