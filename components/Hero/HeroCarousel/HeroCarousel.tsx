import {
  useRef,
  useState,
  useEffect,
  BaseSyntheticEvent,
  ReactNode,
  RefObject,
} from "react";
/*
Eventual Data
{
  name: "VSTKO",
  genres: ["electronic", "grunge", "alternative"],
  streamingURLs: {
    spotify: 'https://spotify/yeah',
    appleMusic: https://apple-music/yeah
  }
  recentActivity: [
    // this array should populate dynamically, and take any of: 
      // songs object, video object, post object, event object
      // should populate based on the latest updates, use timestamps for uploaded content
      // Use Enum   
  ]
},
*/

import HeroCarouselItem from "@/components/Hero/HeroCarousel/HeroCarouselItem";

type Header = {
  children: React.ReactNode;
};

export default function HeroCarousel({ children }: Header): React.ReactNode {
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

  const [itemWasClicked, setItemWasClicked] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const styles = {
    heroContainer: `relative min-w-screen flex min-h-screen flex-col justify-center bg-slate-900 p-8 align-middle overflow-hidden`,
    carouselListItemsWrapper: `no-scrollbar absolute left-0 bottom-0 inline-flex snap-x gap-2 overflow-x-auto transition-all ${
      itemWasClicked ? "" : "mb-8 pl-8"
    }`,
    fullWidthContainer: {
      width: "100vw",
      marginLeft: "calc((100% - 100vw)/2)",
    },
  };

  const handleCarouselItemClick = (
    event: BaseSyntheticEvent,
    itemClicked?: HTMLDivElement | null,
  ): void => {
    const cardContainer = cardContainerRef.current;
    const header = headerRef.current;
    const cardItemClicked = event.target;

    if (cardItemClicked.getAttribute("data-target-type") != null) {
      setItemWasClicked(!itemWasClicked);
      console.log("get element:", itemClicked);

      if (itemClicked != null) {
        itemClicked.ontransitionend = () => {
          itemClicked.style.border = "1px solid red";
        };
      }
    }

    // if (cardItemClicked !== null && cardContainer !== null) {
    //   cardItemClicked.ontransitionend = () => {
    //     const cardItemOffsetX = cardItemClicked?.getBoundingClientRect().x;
    //     const cardItemOffsetY = cardItemClicked?.getBoundingClientRect().y;

    //     window.scrollTo({
    //       top: cardItemOffsetY,
    //       behavior: "smooth",
    //     });

    //     cardContainer.scrollLeft = cardItemOffsetX < 0 ? 0 : cardItemOffsetX;
    //   };

    //   // disable scroll
    // }
  };

  return (
    <div className={styles.heroContainer}>
      <header ref={headerRef}>{children}</header>
      <div
        className={styles.carouselListItemsWrapper}
        style={styles.fullWidthContainer}
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
    </div>
  );
}
