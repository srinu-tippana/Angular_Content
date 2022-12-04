var b = false;
console.log(b);
var c = 2;
console.log(c);
var d = 83;
console.log(d);
var firstname = "Edureka!";
console.log(firstname);
var a = ["TS", "JS"];
console.log(a);
var ab = ["TS", "JS"];
console.log(ab);
var ac;
var ad = 10; /* const will not allow  value to changed*/
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["mango"] = 2] = "mango";
    fruit[fruit["banana"] = 3] = "banana";
    fruit[fruit["orange"] = 4] = "orange";
})(fruit || (fruit = {}));
var fruitname = fruit[2];
console.log(fruitname);
var ag;
/* ag will accept numbers strings etc*/
ag = 10;
ag = "Edureka";
console.log(ag);
