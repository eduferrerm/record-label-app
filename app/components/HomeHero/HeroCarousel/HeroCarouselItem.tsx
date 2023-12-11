import MDSMetaData from "@/app/components/DesignSystem/MDSMetaData";
import MDSText from "@/app/components/DesignSystem/MDSText";
import { useRef, useState } from "react";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col self-end items-center justify-center overflow-hidden bg-mds-grey-50 p-4 transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center text-mds-grey-600`,
  button: `rounded-full border bg-orange-400 px-4 py-2`,
};

interface CarouselItemData {
  name: string;
  songName?: string;
  genres: string[];
  callback: (node: HTMLDivElement | null) => void;
}

export default function HeroCarouselItem({
  name,
  songName,
  genres,
  callback,
}: CarouselItemData) {
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
        <MDSText styleName={"hero-card-band"}>{name}</MDSText>
        {songName != null && <MDSText styleName={"title"}>{songName}</MDSText>}
        <MDSMetaData list={genres} />
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
