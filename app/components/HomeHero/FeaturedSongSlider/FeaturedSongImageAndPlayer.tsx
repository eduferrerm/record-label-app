import Image from "next/image";
import SpotifyPlayer from "../../MusicPlayer/SpotifyPlayer";

interface FeaturedSongImageAndPlayerType {
  itemPressed: boolean;
  imageSrc: string;
  spotifyID: string;
}

export default function FeaturedSongImageAndPlayer({
  imageSrc,
  itemPressed,
  spotifyID,
}: FeaturedSongImageAndPlayerType) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden`}>
      <div
        className={`relative aspect-[4/3] w-full transition-transform duration-[600ms] ${
          itemPressed && "scale-[.9]"
        }`}
      >
        <Image
          src={imageSrc}
          fill={true}
          alt="something"
          className="h-full w-full object-cover"
        />
      </div>
      <SpotifyPlayer
        positionAbsolute={true}
        itemPressed={itemPressed}
        trackID={spotifyID}
      />
    </div>
  );
}
