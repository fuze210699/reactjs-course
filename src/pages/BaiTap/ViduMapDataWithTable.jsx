import React from "react";
import Merchant from "./fakeFoodData";
import RowTable from "./RowTable";

function ViduMapDataWithTable() {
  const HeaderData = [
    { name: "Name" },
    { name: "Dia Chi" },
    { name: "Hanh Dong" },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <HeaderTable data={HeaderData} />
          </tr>
        </thead>
        <tbody>
          <RowTable data={Merchant} />
        </tbody>
      </table>
    </>
  );
}
const HeaderTable = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return <td key={index}>{item.name}</td>;
      })}
    </>
  );
};
export default ViduMapDataWithTable;
