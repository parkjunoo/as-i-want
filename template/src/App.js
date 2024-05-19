import { useEffect } from "react";
import { useFetch } from "./api/useGetUsers";

function App() {
  useEffect(() => {
    getData({
      url: "https://jsonplaceholder.typicode.com/todos/1",
    });
  }, []);

  const { item, getData, isLoading } = useFetch();
  const { item, getData, isLoading } = useFetch();
  const { item, getData, isLoading } = useFetch();

  return (
    <div className="App">
      {isLoading ? <div>Loading...</div> : <div>{item}</div>}
    </div>
  );
}

export default App;
