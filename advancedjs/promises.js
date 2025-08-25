// Promise Example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });
};

fetchData().then(data => console.log(data));
