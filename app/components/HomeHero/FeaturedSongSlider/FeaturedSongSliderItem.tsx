import { useRef, useState } from "react";

import MDSMetaData from "../../DesignSystem/MDSMetaData";
import MDSText from "../../DesignSystem/MDSText";
import FeaturedSongSliderImage from "./FeaturedSongSliderImage";
import React from "react";
import MDSButton from "../../DesignSystem/MDSButton";

interface CarouselItemBand {
  band: BandAndFeaturedSong;
}

export default function FeaturedSongSliderItem({ band }: CarouselItemBand) {
  const [itemSelected, setItemSelected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const clickAction = () => {
    console.log("a button was clicked");
  };

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
        <MDSButton text="Cureosear" buttonAction={clickAction} />
      </div>
    </div>
  );
}

function ItemMeta({ band }: CarouselItemBand) {
  return (
    <div className="flex w-full flex-col gap-mds-space-2">
      <MDSText styleName={"hero-card-band"} semantic="h3">
        {band.name}
      </MDSText>
      <MDSText styleName={"title"} semantic="p">
        {band.featuredsong.name}
      </MDSText>
      <MDSMetaData list={band.featuredsong.genres} />
    </div>
  );
}
