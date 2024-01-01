import { client } from "../../../sanity/client";

import HeroCarousel from "./FeaturedSongSlider/FeaturedSongSlider";

export default async function HomeHero() {
  const bands = await client.fetch<BandAndFeaturedSong[]>(`*[_type == "band"]{
    name,
    featuredsong[0] -> {
      ...,
      cover {
        asset -> {
          url
        }
      }
    }
  }`);

  return <HeroCarousel featuredData={bands} />;
}
