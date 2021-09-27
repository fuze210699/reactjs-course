import React from "react";

export default function MusicDetail({ data }) {
  console.log(data);
  return (
    <div className="flex-4">
      <div className="music-card">
        <img src={data.cover} alt="No img" />
        <div className="card-content">
          <span className="music-name">{data.name}</span>
          <span className="music-author">{data.author}</span>
        </div>
      </div>
    </div>
  );
}
