const add = (a, b) => {
  return a + b;
};

export const getNumbers = async () => {
  const response = await fetch("http://localhost:5001/sleep_times");
  return response;
};

export const addArrayNumbers = (arr) => {
  let sum = 0;
  arr.map((arrayItem) => {
    sum = sum + arrayItem;
  });
  console.log(sum);
  return sum;
};

export default add;
