const years: number[] = [1999,2000,2001];

const divs = ['tig', 'tig', 'tig', 'tig'];

years.push(2010, 2022);

console.log(years);

const movie: [string, number] = ["gozzila", 1999];

console.log(movie[0]);

const smalls = [
  "小動物",
  "小型車",
  "小論文"
]

const [smallAnimal, smallCar, essay] = smalls;

const [, ...other] = smalls;
console.log(smallAnimal, smallCar, essay);
console.log(other);

// const places = ["藤沢市", "横浜市", "川崎市"];

// if (places.includes("横浜市")) {
//   console.log("みなとみらい")
// } else {
//   console.log("残念")
// }


const small_data = [
  "小動物",
  "小型車",
  "小論文"
]

const others = [
  "小市民",
  "小田原",
  "小田急"
]

const newSmalls = [...small_data, ...others];

console.log(newSmalls);

