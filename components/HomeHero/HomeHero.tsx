import { client } from "@/sanity/client";

import HeroCarousel from "@/components/HomeHero/HeroCarousel/HeroCarousel";

export default async function HomeHero() {
  const bands = await client.fetch<Band[]>(`*[_type == "band"]`);

  return <HeroCarousel bands={bands} />;
}
