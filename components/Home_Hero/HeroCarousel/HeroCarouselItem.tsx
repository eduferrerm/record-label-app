import { useRef, useState } from "react";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col self-end items-center justify-center overflow-hidden bg-slate-800 p-4 transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center`,
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

  console.log("recentActivity:", recentActivity);

  return (
    <div
      className={`${styles.itemContainer} ${
        itemIsExpanded ? "h-screen w-screen" : "h-52 w-52"
      }`}
      ref={cardRef}
    >
      <div className={styles.contentContainer}>
        <h2 className="mb-2">{name}</h2>
        <h3 className="mb-4">{genres[0]}</h3>
        <button
          className={styles.button}
          data-target-type="button"
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
