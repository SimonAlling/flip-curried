# flip-curried

Flip the arguments of a curried function (like Haskell's [`flip`][haskell-flip]).

[![NPM Version][shield-npm]][npm-url]
[![Downloads Stats][shield-downloads]][npm-url]


## Installation

```
npm install --save flip-curried
```


## Usage

`flip(f)(b)(a)` is equivalent to `f(a)(b)`.

```typescript
import { flip } from "flip-curried";

const n = 3;
const xs = [1, 2, 3, 4, 5];

take(n)(xs);       // [1, 2, 3]
flip(take)(xs)(n); // [1, 2, 3]

function take<A>(n: number): (xs: Array<A>) => Array<A> {
    return xs => xs.slice(0, n);
}
```


## TypeScript

Declarations are included.


[haskell-flip]: https://hackage.haskell.org/package/base-4.12.0.0/docs/Prelude.html#v:flip

[npm-url]: https://npmjs.org/package/flip-curried
[shield-npm]: https://img.shields.io/npm/v/flip-curried.svg
[shield-downloads]: https://img.shields.io/npm/dm/flip-curried.svg
