import add, { addArrayNumbers, getNumbers } from "./claculator";

test("add test", () => {
  // add(1,2); // 내가 기대하는 결과 값이 나오면 성공
  expect(add(1, 2)).toBe(3);
});

describe("get number array and sum", () => {
  const text = "text";

  const getData = async () => {
    const response = await getNumbers();
    const responseData = await response.json();
    return responseData;
  };

  test("get numbers", async () => {
    console.log("get text : ", text);
    const data = await getData();
    expect(data).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("sum numbers", async () => {
    const data = await getData();
    expect(addArrayNumbers(data)).toBe(15);
  });
});
