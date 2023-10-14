type ButtonData = {
  url: string;
  text: string;
};

type CarouselItemData = {
  name: string;
  genres: string[];
  button: ButtonData;
};

function HeroCarouselItem({ name, genres, button }: CarouselItemData) {
  return (
    <div
      className={`inline-flex h-52 w-52 flex-shrink-0 flex-col items-center justify-center bg-slate-800 p-4`}
    >
      <h2>{name}</h2>
      <h3>{genres[0]}</h3>
      <a
        className="rounded-full border bg-orange-400 px-4 py-2"
        href={button.url}
      >
        {button.text}
      </a>
    </div>
  );
}

export default function HeroCarousel(): React.ReactNode {
  const mockDataBand = [
    {
      name: "VSTKO",
      genres: ["electronic", "grunge", "alternative"],
      button: {
        text: "Curiosear",
        url: "https://soundcloud.com/k_fm/heartcenterfold",
      },
    },
    {
      name: "Wells",
      genres: ["grunge", "alternative", "psycodelic"],
      button: {
        text: "Curiosear",
        url: "https://soundcloud.com/k_fm/sets/los-wells-demente-y-chocolete",
      },
    },
    {
      name: "Fotoconfetti",
      genres: ["brit", "orquestado", "cinematic"],
      button: {
        text: "Curiosear",
        url: "https://soundcloud.com/k_fm/sets/radioespejos",
      },
    },
  ];

  return (
    <div
      className="no-scrollbar inline-flex gap-4 overflow-x-auto pl-8"
      style={{
        width: "100vw",
        marginLeft: "calc((100% - 100vw)/2)",
      }}
    >
      {mockDataBand.map((band) => (
        <HeroCarouselItem
          name={band.name}
          genres={band.genres}
          button={band.button}
        />
      ))}
    </div>
  );
}
