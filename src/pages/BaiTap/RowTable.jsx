import React from "react";

function RowTable({ data }) {
  const handleClick = () => {
    window.history.push("/dashboard");
  };
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <DetailButton />
              </td>
            </tr>
          );
        })}
    </>
  );
}
const DetailButton = () => {
  const handleClick = () => {};
  return (
    <button onClick={handleClick}>
      <a href="/#">Detail</a>
    </button>
  );
};
export default RowTable;
