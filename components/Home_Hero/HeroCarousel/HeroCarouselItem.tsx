import MDSText from "@/components/Design_System/MDSText";
import { useRef, useState } from "react";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col self-end items-center justify-center overflow-hidden bg-mds-grey-50 p-4 transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center text-mds-grey-600`,
  button: `rounded-full border bg-orange-400 px-4 py-2`,
};

enum SlideType {
  "song",
  "event",
  "about",
  "video",
  "post",
}

export type SlideData = {
  type: string;
  data: {
    cover: string | null;
    title: string;
    metaData: string[];
    cta: string[];
  };
};

type CarouselItemData = {
  name: string;
  genres: string[];
  recentActivity: SlideData[];
  callback: (node: HTMLDivElement | null) => void;
};

export default function HeroCarouselItem({
  name,
  genres,
  callback,
  recentActivity,
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
        <MDSText text={name} styleName={"hero-card-band"} />
        <MDSText text={genres[0]} styleName={"meta-data"} />
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
