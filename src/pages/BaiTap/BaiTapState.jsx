import React, { useState } from "react";

export default function BaiTapState() {
  const [count, setCount] = useState(0);

  // React Hook : useState

  const ChangeCount = () => {
    setCount(count + 1);
  };
  const TruMot = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <PlusCount ChangeCount={ChangeCount} TruMot={TruMot} />
      ---
      <Result result={count} />
    </div>
  );
}
const PlusCount = ({ ChangeCount, TruMot }) => {
  const change = () => {
    ChangeCount();
  };
  const change1 = () => {
    TruMot();
  };
  return (
    <>
      <button type="button" onClick={change}>
        Cộng Lên 1
      </button>
      <button type="button" onClick={change1}>
        Tru 1
      </button>
    </>
  );
};
const Result = ({ result }) => {
  console.log(result);
  return <span>{result}</span>;
};
