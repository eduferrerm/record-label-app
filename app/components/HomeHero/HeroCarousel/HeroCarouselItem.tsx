import { useRef, useState } from "react";

import Image from "next/image";

import MDSMetaData from "../../DesignSystem/MDSMetaData";
import MDSText from "../../DesignSystem/MDSText";

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
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${styles.itemContainer} ${
        itemIsExpanded ? "h-screen w-screen" : "h-[21.8rem] w-[18.8rem]"
      }`}
      ref={cardRef}
    >
      <div className={styles.contentContainer}>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={band.featuredsong.cover.asset.url}
            fill={true}
            alt="something"
            className="object-cover"
          />
        </div>
        <div className="flex w-full items-center">
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
