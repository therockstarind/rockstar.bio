import Link from "next/link";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Song } from "@lib/types";

const Spotify = () => {
  const { data: currentSong } = useSWR("/api/now-playing", fetcher);

  return (

      <div>
        {currentSong?.isPlaying ? (
          <WhenPlaying song={currentSong} />
        ) : (
          <NotPlaying />
        )}
      </div>
  );
};

function NotPlaying() {
  return (
    <div className="flex items-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold md:text-lg text-black dark:text-white">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold dark:text-gray-300 animate-pulse">
        Now Listening . . .
      </h4>
      <Link
        href={song.songUrl}
        className="flex items-center justify-between bg-gray-200 dark:bg-darkSecondary  p-3 sm:p-4 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 animate-[spin_7s_linear_infinite]">
            <Image
              alt={song.title}
              src={song.albumImageUrl}
              width={50}
              height={50}
              quality={100}
              blurDataURL={song.albumImageUrl}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-semibold md:text-lg text-black dark:text-white animate-">
              {song.title}
            </h3>
            <span className="hidden md:inline-flex dark:text-gray-300">—</span>

            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              {song.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="w-6 h-6 text-green-500" />
        </div>
      </Link>
    </div>
  );
}

export default Spotify;
