import React from "react";
import "../components/Video.css";

const Video = () => {
  return (
    <>
      <h1>BY THE BEAUTY | Brand Identity Manual</h1>
      <video width="80%" controls autoplay className="video">
        <source src="BYTHEBEAUTY.mp4" type="video/mp4" />
      </video>
      <h4 className="details">
        More details on&nbsp;
        <a
          href="https://www.behance.net/gallery/123267455/BY-THE-BEAUTY-Brand-Identity-Manual"
          className="Link"
        >
          Behance
        </a>
      </h4>
    </>
  );
};

export default Video;
