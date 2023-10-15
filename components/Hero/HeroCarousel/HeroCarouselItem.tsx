import { useRef, useState } from "react";

type CarouselItemData = {
  name: string;
  genres: string[];
  cardContainer: HTMLDivElement | null;
};

export default function HeroCarouselItem({
  name,
  genres,
  cardContainer,
}: CarouselItemData) {
  const [itemIsExpanded, setItemIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCarouselItemClick = () => {
    const cardItemClicked = cardRef.current;
    const cardItemOffsetX = cardItemClicked?.getBoundingClientRect().x;
    const cardItemOffsetY = cardItemClicked?.getBoundingClientRect().y;

    if (cardItemClicked !== null && cardContainer !== null) {
      setItemIsExpanded(!itemIsExpanded);
      console.log("before transition:", cardItemOffsetY);
      cardItemClicked.ontransitionend = () => {
        console.log("after transition:", cardItemOffsetY);
        window.scrollTo({
          top: cardItemOffsetY,
          behavior: "smooth",
        });
      };

      console.log("card item x:", cardItemClicked?.getBoundingClientRect().x);
      console.log("itemContainer scroll left:", cardContainer?.scrollLeft);

      if (cardItemOffsetX != null && cardItemOffsetY != null) {
        cardContainer.scrollLeft = cardItemOffsetX < 0 ? 0 : cardItemOffsetX;
      }

      // disable scroll
    }
  };

  return (
    <div
      className={`inline-flex transition-all ${
        itemIsExpanded ? "h-screen w-screen" : "h-52 w-52"
      } flex-shrink-0 flex-col items-center justify-center bg-slate-800 p-4`}
      ref={cardRef}
      onClick={handleCarouselItemClick}
    >
      <h2 className="mb-2">{name}</h2>
      <h3 className="mb-4">{genres[0]}</h3>
      <button className="rounded-full border bg-orange-400 px-4 py-2">
        Curiosear
      </button>
    </div>
  );
}
