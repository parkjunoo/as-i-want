export const tempApi = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("hi");
    }, 3000);
  });
};
