import videoStyles from "../styles/video.module.css";

export default function Video() {
  return (
    <>
      <div id="pd-video-container" className={videoStyles.pd_video_container}>
        <video
          id="pd-video"
          className={videoStyles.pd_video}
          autoPlay
          playsInline
          muted
          ></video>
          <canvas id="pd-video-canvas" className={videoStyles.pd_video_canvas}>

          </canvas>
      </div>
    </>
  );
}
