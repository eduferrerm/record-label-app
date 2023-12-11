import MDSMetaData from "../../DesignSystem/MDSMetaData";
import MDSText from "../../DesignSystem/MDSText";
import { useRef, useState } from "react";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col self-end items-center justify-center overflow-hidden bg-mds-grey-50 p-4 transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center text-mds-grey-600`,
  button: `rounded-full border bg-orange-400 px-4 py-2`,
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
        itemIsExpanded ? "h-screen w-screen" : "h-52 w-52"
      }`}
      ref={cardRef}
    >
      <div className={styles.contentContainer}>
        <MDSText styleName={"hero-card-band"}>{band.name}</MDSText>
        <MDSText styleName={"title"}>{band.featuredsong.name}</MDSText>
        <MDSMetaData list={band.featuredsong.genres} />
        <button
          className={styles.button}
          onClick={() => {
            callback(cardRef.current);
            setItemIsExpanded(!itemIsExpanded);
          }}
        >
          Curiosear
        </button>
      </div>
    </div>
  );
}
