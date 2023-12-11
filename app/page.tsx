import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import HomeHero from "@/app/components/HomeHero/HomeHero";

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

export default async function Home() {
  return (
    <main
      className={`${robotoRegular.variable} ${robotoCondensedMedium.variable} ${robotoCondensedBold.variable}`}
    >
      <HomeHero />
    </main>
  );
}
