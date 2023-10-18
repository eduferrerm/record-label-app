import { BaseSyntheticEvent, useRef, useState } from "react";

type CarouselItemData = {
  name: string;
  genres: string[];
  callback: (node: HTMLDivElement | null) => void;
};

const styles = {
  itemContainer: `inline-flex flex-shrink-0 flex-col self-end items-center justify-center bg-slate-800 p-4 transition-all duration-500`,
  button: `rounded-full border bg-orange-400 px-4 py-2`,
};

export default function HeroCarouselItem(props: CarouselItemData) {
  const { name, genres, callback } = props;
  const [itemIsExpanded, setItemIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${styles.itemContainer} ${
        itemIsExpanded ? "h-screen w-screen" : "h-52 w-52"
      }`}
      ref={cardRef}
    >
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
  );
}
