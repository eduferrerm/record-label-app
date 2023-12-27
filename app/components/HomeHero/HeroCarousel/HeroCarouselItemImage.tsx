import Image from "next/image";
import { RefObject } from "react";

interface HeroCarouselItemImageType {
  itemIsExpanded: boolean;
  imageSrc: string;
  ref: RefObject<HTMLDivElement>;
}
export default function HeroCarouselItemImage({
  itemIsExpanded,
  imageSrc,
}: HeroCarouselItemImageType) {
  return (
    <div
      className={`absolute left-0 top-0 transition-all duration-500 ${
        itemIsExpanded ? "h-screen w-screen" : `aspect-[4/3] w-full`
      }`}
    >
      <Image
        src={imageSrc}
        fill={true}
        alt="something"
        className="object-cover"
      />
    </div>
  );
}
