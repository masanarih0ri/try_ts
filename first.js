var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var years = [1999, 2000, 2001];
var divs = ['tig', 'tig', 'tig', 'tig'];
years.push(2010, 2022);
console.log(years);
var movie = ["gozzila", 1999];
console.log(movie[0]);
var smalls = [
    "小動物",
    "小型車",
    "小論文"
];
var smallAnimal = smalls[0], smallCar = smalls[1], essay = smalls[2];
var other = smalls.slice(1);
console.log(smallAnimal, smallCar, essay);
console.log(other);
// const places = ["藤沢市", "横浜市", "川崎市"];
// if (places.includes("横浜市")) {
//   console.log("みなとみらい")
// } else {
//   console.log("残念")
// }
var small_data = [
    "小動物",
    "小型車",
    "小論文"
];
var others = [
    "小市民",
    "小田原",
    "小田急"
];
var newSmalls = __spreadArrays(small_data, others);
console.log(newSmalls);
