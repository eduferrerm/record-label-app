"use client";

import Image from "next/image";
import FeaturedSongSliderItem from "./FeaturedSongSliderItem";
import MDSText from "../../DesignSystem/MDSText";

const styles = {
  fullWidthContainer: {
    width: "100vw",
    marginLeft: "calc((100% - 100vw)/2)",
  },
};

interface FeaturedSongSlider {
  featuredSongData: BandAndFeaturedSong[];
}

function FeaturedSongHeader() {
  return (
    <header>
      <h1 className="relative h-[59px] w-[110px]">
        <Image
          src="/mh-logo.svg"
          fill={true}
          className="w-full object-contain"
          alt="Melohumano records"
        />
      </h1>
    </header>
  );
}

function FeaturedSongList({
  featuredSongData,
}: FeaturedSongSlider): React.ReactNode {
  return (
    <article className="flex flex-col gap-mds-space-4">
      <MDSText styleName={"subtitle"} semantic="h2">
        Tracks Recientes
      </MDSText>
      <div
        className="no-scrollbar snap-xgap-2 mb-8 inline-flex overflow-hidden overflow-x-auto px-8"
        style={styles.fullWidthContainer}
      >
        <div className="inline-flex gap-4">
          {featuredSongData.map((featuredSongDataBandItem) => (
            <FeaturedSongSliderItem
              key={featuredSongDataBandItem.name}
              band={featuredSongDataBandItem}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedSongSlider({
  featuredSongData,
}: FeaturedSongSlider): React.ReactNode {
  return (
    <section className="min-w-screen relative flex min-h-screen flex-col justify-between overflow-hidden bg-mds-grey-100 p-8 align-middle">
      <FeaturedSongHeader />
      <FeaturedSongList featuredSongData={featuredSongData} />
    </section>
  );
}
