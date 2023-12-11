import { client } from "@/sanity/client";

import HeroCarousel from "@/app/components/HomeHero/HeroCarousel/HeroCarousel";

export default async function HomeHero() {
  const bands = await client.fetch<BandAndFeaturedSong[]>(`*[_type == "band"]{
    name,
    featuredsong[0]->
  }`);

  return <HeroCarousel featuredData={bands} />;
}
