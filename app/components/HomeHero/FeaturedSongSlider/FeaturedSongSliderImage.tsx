import Image from "next/image";

interface FeaturedSongSliderImageType {
  itemSelected: boolean;
  imageSrc: string;
}

export default function FeaturedSongSliderImage({
  imageSrc,
}: FeaturedSongSliderImageType) {
  return (
    <div className={`relative aspect-[4/3] w-full`}>
      <Image
        src={imageSrc}
        fill={true}
        alt="something"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
