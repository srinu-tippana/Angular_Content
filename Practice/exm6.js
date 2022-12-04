var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log("Implementing an Interface" + this.s + " " + this.t);
    };
    return A;
}());
var o = new A(2, "srinu");
console.log(o.myFunc());
