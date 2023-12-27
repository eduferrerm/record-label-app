import { useEffect, useRef, useState } from "react";

import MDSMetaData from "../../DesignSystem/MDSMetaData";
import MDSText from "../../DesignSystem/MDSText";
import HeroCarouselItemImage from "./HeroCarouselItemImage";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col overflow-hidden transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center text-mds-grey-600 w-full gap-mds-space-4`,
};

interface CarouselItemBand {
  band: BandAndFeaturedSong;
  callback: (node: HTMLDivElement | null) => void;
}

export default function HeroCarouselItem({ band, callback }: CarouselItemBand) {
  const [itemIsExpanded, setItemIsExpanded] = useState(false);
  const [cardImageHeight, setCardImageHeight] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardImageRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  const paddingTopClasses = `pt-mds-hero-card-height`;
  const cardWidthClasses = `w-mds-hero-card-width`;

  useEffect(() => {
    if (cardImageRef.current !== null) {
      setCardImageHeight(cardImageRef.current.offsetHeight);
    }
  }, [cardImageRef.current]);

  return (
    <div
      className={`${styles.itemContainer} ${
        itemIsExpanded ? "h-screen w-screen" : `${cardWidthClasses}`
      }`}
      ref={cardRef}
    >
      <div
        id="content-container"
        className={`${styles.contentContainer} ${
          itemIsExpanded ? "" : `${paddingTopClasses} h-auto`
        }`}
      >
        <HeroCarouselItemImage
          itemIsExpanded={itemIsExpanded}
          imageSrc={band.featuredsong.cover.asset.url}
          ref={cardImageRef}
        />
        <div
          className="relative z-10 flex w-full items-center pt-mds-space-3"
          ref={cardContentRef}
        >
          <div className="flex w-full flex-col gap-mds-space-1">
            <MDSText styleName={"hero-card-band"}>{band.name}</MDSText>
            <MDSText styleName={"title"}>{band.featuredsong.name}</MDSText>
            <MDSMetaData list={band.featuredsong.genres} />
          </div>
          <button
            className="h-10 rounded-full border-2 border-solid border-mds-grey-600 px-2 font-mds-sans-cond-bold text-mds-text-1 uppercase leading-none"
            onClick={() => {
              callback(cardRef.current);
              setItemIsExpanded(!itemIsExpanded);
            }}
          >
            Curiosear
          </button>
        </div>
      </div>
    </div>
  );
}
