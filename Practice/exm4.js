var myClass = /** @class */ (function () {
    function myClass(k) {
        this.j = k;
    }
    myClass.prototype.value = function () {
        return ("The number is " + this.j);
    };
    return myClass;
}());
var myobj = new myClass(6);
console.log(myobj.value());
