export default function Home() {
  const clickHandler = () => {
    fetch("/api/add-item?name=Jacket")
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };
  return (
    <main>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={clickHandler}>hihihihi</button>
      </div>
    </main>
  );
}
