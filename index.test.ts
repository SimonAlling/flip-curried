import { flip } from "./src/index";

function take<A>(n: number): (xs: Array<A>) => Array<A> {
  return xs => xs.slice(0, n);
}

it("can flip", () => {
  const n = 3;
  const xs = [1, 2, 3, 4, 5];
  expect(flip(take)(xs)(n)).toEqual(take(n)(xs));
});
