"use client";

import { useRef, useState } from "react";

import FeaturedSongSliderItem from "./FeaturedSongSliderItem";

const styles = {
  fullWidthContainer: {
    width: "100vw",
    marginLeft: "calc((100% - 100vw)/2)",
  },
};

interface HeroCarousel {
  featuredData: BandAndFeaturedSong[];
}

export default function HeroCarousel({
  featuredData,
}: HeroCarousel): React.ReactNode {
  return (
    <div className="min-w-screen relative flex min-h-screen flex-col justify-between overflow-hidden bg-mds-grey-100 p-8 align-middle">
      <header className="text-mds-grey-600">
        <h1 className="mb-4 font-mds-sans-cond-bold uppercase leading-none">
          Melo
          <br />
          humano
          <br />
          Records
        </h1>
        <h2 className="mb-4">Un santuario sonoro de mariposas y taras bruja</h2>
      </header>
      <div
        className="no-scrollbar mb-8 inline-flex snap-x gap-2 overflow-hidden overflow-x-auto px-8"
        style={styles.fullWidthContainer}
      >
        <div className="inline-flex gap-4">
          {featuredData.map((featuredDataItem) => (
            <FeaturedSongSliderItem
              key={featuredDataItem.name}
              band={featuredDataItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
