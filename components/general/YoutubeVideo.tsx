import React from "react";

interface Props {
    url: string;
}

export default function YoutubeVideo({url}: Props) {
  return (
    <iframe
      style={{paddingTop: 20, borderRadius: 4}}
      width={"400px"}
      height={'200px'}
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
