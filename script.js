console.log(30 === 30.0);
// decimal - base 10 --> 0 - 9
// binary base 2 --> 0, 1
console.log(0.1 + 0.2);
console.log(52.25 + 175.125);

// toFixed()
// const a = 52.25;
// const b = 175.125;

// const sum = a + b;
// console.log(Number(sum.toFixed(1))); // string

const a = 0.1;
const b = 0.2;

const sum = a + b;
// console.log(Number(sum.toFixed(2))); // string
console.log(+sum.toFixed(2)); // string
console.log(+"23");
console.log(Number("23"));

// Parsing
console.log(parseInt("8 rem"));
console.log(parseFloat("8.5 rem"));
console.log(parseFloat("8 rem"));
console.log();

// Number --> object namespace
console.log(Number.parseFloat("16px"));

console.log(parseInt("11011px", 2)); // radix
console.log(parseInt("100px", 2));

// NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("shohan"));
console.log(Number.isNaN(25 / 0)); //infinity
console.log(25 / 0);

console.log(isNaN("23"));
console.log(Number.isNaN(parseFloat("r8 rem")));

// Number
console.log(Number.isFinite(20));
console.log(Number.isFinite(25 / 0));
console.log(Number.isFinite(parseInt("24px")));

// Math
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3)); //cbrt

const arr = [25, 85, 57, 41, 23, 65, 9, 8];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

// pi*r*^2
// 2 * pi * r

console.log(Math.PI * 2.5 ** 2);
console.log(Math.trunc(27.32222222));

// console.log(Math.random()); // 0 - 1
console.log(Math.random() * 100); // 0 - 1
console.log(Math.trunc(Math.random() * 100)); // 0 - 1

console.log(Math.floor(2.8));
console.log(Math.ceil(2.5));
console.log(Math.round(2.5));

console.log(Math.sin(30));
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.cos(90));

console.log(Math.floor(3.9));
console.log(Math.trunc(3.9));

// 22,800
// 2,15,375
// console.log(2, 15, 375);
console.log(2_15_375);
console.log(3_99); // 3.99
console.log(3_99); // 3.99
console.log("3.99");
console.log("2,15,375");

// ES2020 (BigInt)
// 64-bit number system

// 2^53 - 1
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(
  4654654646546464646464646464646464644611548441 *
    4684684646546516516846849846516516546546
);

console.log(BigInt(15484841515448484541515115151544415444854));

console.log(100000000n * 100000000n);

console.log(20n === 20);
console.log(typeof 20n);

// dates
const today = new Date();
console.log(today);

console.log(new Date("Sep 20 2022 10:20:45"));
console.log(new Date("November 13, 2020"));
console.log(new Date(2022, 9, 20, 19, 52, 53)); // month is 0 based
console.log(new Date(2088, 0, 10)); // month is 0 based

// timestamp
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log(new Date("November 13, 1754"));

const myTime = new Date(2044, 11, 20, 20, 42, 12, 300);
console.log(myTime);

console.log(myTime.getFullYear());
console.log(myTime.getMonth());
console.log(myTime.getDate());
console.log(myTime.getDay()); // mon = 0
console.log(myTime.getHours());
console.log(myTime.getMinutes());
console.log(myTime.getSeconds());
console.log(myTime.getMilliseconds());
console.log(myTime.getTime()); // time

console.log(new Date(2365857732300));

console.log(Date.now());

console.log(new Date(1664296121915));

console.log(new Date());
console.log(new Date(2365857732300));
console.log(new Date(2020, 10, 22, 45, 10));
console.log(new Date("Sep 10, 2021"));
console.log(new Date("20 Dec, 2045"));

const newDate = new Date(2155856722300);
console.log(newDate);

const year = newDate.getFullYear();
const month = newDate.getMonth();
const date = newDate.getDate();

console.log(`${date}/${String(month + 1).padStart(2, 0)}/${year}`);

// console.log("Shohan".padStart(24, 0));

// Intl numbers
// Currency
const num = 2155816712300;

console.log(navigator.language);

const displayTime = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
}).format(num);

console.log(displayTime);

// Time
const recentTime = new Date();
console.log(recentTime);

const options = {
  weekday: "short",
  month: "numeric",
  day: "numeric", // not date, it is day
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const datetime = new Intl.DateTimeFormat("en-US", options).format(recentTime);
console.log(datetime);

// set timeout()
// set interval()

// console.log("Hello");

// setTimeout(() => {
//   console.log("WOrld");
// }, 5000);

// console.log("Hi");

// setTimeout(function () {
//   console.log(new Date());
// }, 3000);

// // set interval()

// setInterval(function () {
//   console.log("HEllO!!!!!!!!!!!!!");
// }, 2000);

// setInterval(function () {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
