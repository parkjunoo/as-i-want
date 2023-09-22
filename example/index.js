export const getItems = async () => {
  const res = await fetch({
    url: "https://jsonplaceholder.typicode.com/list",
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
};

console.log("하이하이");
