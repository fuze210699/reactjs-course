import React from "react";

export default function BaiGiangRenderData() {
  const name = "Tran Thien";
  const age = 22;
  const isMale = true;
  const music = {
    name: "Hương",
    sdt: "0913184232",
  };
  return (
    <div>
      {/* Render name */}
      Name: {name} - {age} - {isMale ? "Male" : "Female"} -
      {typeof undefined === "undefined" ? "Undefined" : "Non Undefined"}
      {console.log(undefined)}
      Object Name- {music.name} - SDT -{music.sdt}
      ------------------------
      {isMale ? <Male /> : <Female />}
      {isMale ? (
        <>
          <span>abc123456</span>
          <span>nndasjdsajjads</span>
        </>
      ) : (
        <Female />
      )}
    </div>
  );
}
const Male = () => {
  return <>Male</>;
};
const Female = () => {
  return <>Female</>;
};
