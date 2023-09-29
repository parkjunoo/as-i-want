import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("/api/get-items")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.items);
      });
  }, []);

  const clickHandler = () => {
    if (inputRef.current == null || inputRef.current.value === "") {
      alert("Please enter a name");
      return;
    }
    fetch(`/api/add-item?name=${inputRef.current.value}`)
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };
  return (
    <main>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button
          css={css`
            width: 100%;
            background-color: red;
          `}
          onClick={clickHandler}
        >
          Add Jecket
        </button>
        <input ref={inputRef} type="text" placeholder="name" />
        <div>
          {productList &&
            productList.map((item) => (
              <div key={item}> {JSON.stringify(item)}</div>
            ))}
        </div>
      </div>
    </main>
  );
}
