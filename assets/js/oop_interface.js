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
var Machine = (function () {
    function Machine() {
    }
    Machine.prototype.calculate = function (x, y) {
        return x + y;
    };
    return Machine;
}());
var SupperMan = (function (_super) {
    __extends(SupperMan, _super);
    function SupperMan(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    SupperMan.prototype.eat = function () {
        console.log("eat");
    };
    SupperMan.prototype.sleep = function () {
        console.log("sleep");
    };
    SupperMan.prototype.fly = function () {
        console.log("fly");
    };
    return SupperMan;
}(Machine));
var john = new SupperMan('john');
john.eat();
john.sleep();
john.fly();
console.log(john.calculate(2, 3));
