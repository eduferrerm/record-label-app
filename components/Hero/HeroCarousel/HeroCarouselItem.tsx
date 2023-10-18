import { BaseSyntheticEvent, useRef, useState } from "react";

type CarouselItemData = {
  name: string;
  genres: string[];
  callback: (ev: BaseSyntheticEvent, node: HTMLDivElement | null) => void;
};

export default function HeroCarouselItem(props: CarouselItemData) {
  const { name, genres, callback } = props;
  const [itemIsExpanded, setItemIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const styles = {
    itemContainer: `inline-flex flex-shrink-0 flex-col self-end items-center justify-center bg-slate-800 p-4 transition-all duration-500 ${
      itemIsExpanded ? "h-screen w-screen" : "h-52 w-52"
    }`,
    button: `rounded-full border bg-orange-400 px-4 py-2`,
  };

  return (
    <div className={styles.itemContainer} ref={cardRef}>
      <h2 className="mb-2">{name}</h2>
      <h3 className="mb-4">{genres[0]}</h3>
      <button
        className={styles.button}
        data-target-type="button"
        onClick={(ev) => {
          callback(ev, cardRef.current);
          setItemIsExpanded(!itemIsExpanded);
        }}
      >
        Curiosear
      </button>
    </div>
  );
}
