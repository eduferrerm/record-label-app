import { useRef, useState } from "react";

import MDSMetaData from "../../DesignSystem/MDSMetaData";
import MDSText from "../../DesignSystem/MDSText";
import FeaturedSongSliderImage from "./FeaturedSongSliderImage";
import React from "react";

interface CarouselItemBand {
  band: BandAndFeaturedSong;
}

export default function FeaturedSongSliderItem({ band }: CarouselItemBand) {
  const [itemSelected, setItemSelected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-mds-hero-card-width md:w-mds-hero-card-width-md lg:w-mds-hero-card-width-lg xl:w-mds-hero-card-width-xl xxl:w-mds-hero-card-width-xxl relative flex flex-shrink-0 flex-col gap-mds-space-4"
      ref={cardRef}
    >
      <FeaturedSongSliderImage
        itemSelected={itemSelected}
        imageSrc={band.featuredsong.cover.asset.url}
      />
      <div className="relative flex w-full items-center justify-center gap-mds-space-4 text-mds-grey-600">
        <ItemMeta band={band} />
        <button
          className="h-10 rounded-full border-2 border-solid border-mds-grey-600 px-2 font-mds-sans-cond-bold text-mds-text-1 uppercase leading-none"
          onClick={() => {
            console.log("a button was clicked");
          }}
        >
          Curiosear
        </button>
      </div>
    </div>
  );
}

function ItemMeta({ band }: CarouselItemBand) {
  return (
    <div className="flex w-full flex-col gap-mds-space-1">
      <MDSText styleName={"hero-card-band"}>{band.name}</MDSText>
      <MDSText styleName={"title"}>{band.featuredsong.name}</MDSText>
      <MDSMetaData list={band.featuredsong.genres} />
    </div>
  );
}
