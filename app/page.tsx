import { client } from "@/sanity/client";

import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import HomeHero from "@/components/Home_Hero/HomeHero";

const robotoRegular = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-roboto-regular",
});

const robotoCondensedMedium = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-roboto-condensed-medium",
});

const robotoCondensedBold = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
  variable: "--font-roboto-condensed-bold",
});

type Band = {
  genres: string[];
  songs: BandSong[];
  _createdAt: string;
  influences: string[];
  _rev: string;
  _type: string;
  name: string;
  slug?: {
    current: string;
  };
  _id: string;
  _updatedAt: string;
};

type BandSong = {
  _key: string;
  _ref: string;
  _type: string;
};

export default async function Home() {
  const bands = await client.fetch<Band[]>(`*[_type == "band"]`);

  console.log("bands:", bands);

  return (
    <main
      className={`${robotoRegular.variable} ${robotoCondensedMedium.variable} ${robotoCondensedBold.variable}`}
    >
      <HomeHero />
      <ul>
        {bands.map((band) => (
          <li key={band._id}>
            <p>{band.name} Songs:</p>

            {/* {band.slug != null ? (
              <a href={band?.slug.current}>{band?.name}</a>
            ) : (
              <p>{band.name}</p>
            )} */}
          </li>
        ))}
      </ul>
    </main>
  );
}
