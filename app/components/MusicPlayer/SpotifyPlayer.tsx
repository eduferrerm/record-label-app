"use client";

declare global {
  interface Window {
    onSpotifyIframeApiReady: any;
  }
}

interface SpotifyPlayerType {
  itemPressed: boolean;
  positionAbsolute?: boolean;
  trackID: string;
}

export default function SpotifyPlayer({
  positionAbsolute = false,
  itemPressed,
  trackID,
}: SpotifyPlayerType) {
  const easingFunction = "ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]";
  const applyPositionAbsolute = positionAbsolute && "absolute bottom-0";
  const applyAnimation = !itemPressed && "translate-y-full";

  return (
    <div
      className={`md:w-mds-hero-card-width-md lg:w-mds-hero-card-width-lg xl:w-mds-hero-card-width-xl xxl:w-mds-hero-card-width-xxl h-[5rem] transition-transform duration-[600ms] ${easingFunction} ${applyPositionAbsolute} ${applyAnimation}`}
    >
      <iframe
        src={`https://open.spotify.com/embed/track/${trackID}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
