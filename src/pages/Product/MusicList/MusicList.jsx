import { fakeData } from "pages/Product/MusicList/fakeData";
import React from "react";

import * as IoIcons from "react-icons/io";

import MusicDetail from "./MusicDetail";
import "./style.css";

export default function MusicList() {
  return (
    <div className="music">
      <div className="music-topic">
        ALBUM HOT <IoIcons.IoIosArrowForward />
      </div>
      <div className="music-listItems">
        {fakeData &&
          fakeData.map((item, index) => {
            return <MusicDetail key={index} data={item} />;
          })}
      </div>
    </div>
  );
}
