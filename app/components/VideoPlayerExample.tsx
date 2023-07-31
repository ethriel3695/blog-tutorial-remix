// import React from "react";

// export const VideoPlayerExample = () => {
//   return (
//     <>
//       {/* <video controls width="750"> */}
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/WgiwhY6To8o"
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//       {/* </video> */}
//     </>
//   );
// };

import React from "react";

// This imports the functional component from the previous sample.
import VideoJS from "./VideoPlayer";

export const VideoPlayerExample = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "/ADO-role-assignment.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
};
