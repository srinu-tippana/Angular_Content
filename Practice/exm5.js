var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParentClass = /** @class */ (function () {
    function ParentClass(k) {
        this.j = k;
    }
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass(m, k) {
        var _this = _super.call(this, k) || this;
        _this.l = m;
        return _this;
    }
    ChildClass.prototype.value = function () {
        return ("value from parent is " + this.j + "and the value of child" + this.l);
    };
    return ChildClass;
}(ParentClass));
var newObj = new ChildClass(12, 23);
console.log(newObj.value());
