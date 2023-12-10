import MDSText from "@/components/DesignSystem/MDSText";
import { useRef, useState } from "react";

const styles = {
  itemContainer: `relative inline-flex flex-shrink-0 flex-col self-end items-center justify-center overflow-hidden bg-mds-grey-50 p-4 transition-all duration-500`,
  contentContainer: `relative z-20 flex flex-col items-center justify-center text-mds-grey-600`,
  button: `rounded-full border bg-orange-400 px-4 py-2`,
};

type CarouselItemData = {
  name: string;
  genres: string[];
  callback: (node: HTMLDivElement | null) => void;
};

export default function HeroCarouselItem({
  name,
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
        <MDSText text={name} styleName={"hero-card-band"} />
        {genres.map((genre) => (
          <MDSText key={genre} text={genre} styleName={"meta-data"} />
        ))}
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
