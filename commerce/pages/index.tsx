import Link from "next/link";

const IndexPage = () => {
  const clickHandler = () => {
    fetch("/api/add-item?name=Jacket")
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <button onClick={clickHandler}>do This!</button>
    </div>
  );
};

export default IndexPage;
