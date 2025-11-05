import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';

import video from "../assets/video/FOAMWOOD 16-9.mp4"
import { useState } from 'react';

type Props = {}

function CompanyVideo({ }: Props) {
  const [hidePlayer, setHidePlayer] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setHidePlayer(false);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHidePlayer(true);
    }, 400);
  };

  return (
    <VideoPlayer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="overflow-hidden rounded-lg border-none mt-12">
      <VideoPlayerContent
        crossOrigin=""
        muted
        preload="auto"
        slot="media"
        loop={true}
        autoPlay={true}
        src={video}
      />
      <VideoPlayerControlBar
        className={`${hidePlayer ? 'opacity-0' : 'opacity-100'} transition-opacity`}
      >
        <VideoPlayerPlayButton />
        <VideoPlayerSeekBackwardButton />
        <VideoPlayerSeekForwardButton />
        <VideoPlayerTimeRange />
        <VideoPlayerTimeDisplay showDuration />
        <VideoPlayerMuteButton />
        <VideoPlayerVolumeRange />
      </VideoPlayerControlBar>
    </VideoPlayer>
  )
}

export default CompanyVideo