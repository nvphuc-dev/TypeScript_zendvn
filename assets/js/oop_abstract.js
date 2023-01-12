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
var Laptop = (function () {
    function Laptop() {
    }
    Laptop.prototype.keyboard = function () {
        console.log("Laptop.keyboard");
    };
    Laptop.prototype.chipset = function () {
        console.log("Laptop.chipset");
    };
    return Laptop;
}());
var LaptopDell = (function (_super) {
    __extends(LaptopDell, _super);
    function LaptopDell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaptopDell.prototype.keyboard = function () {
        console.log("LaptopDell.keyboard");
    };
    LaptopDell.prototype.mainboard = function () {
        console.log("LaptopDell.mainboard");
        return "abc";
    };
    return LaptopDell;
}(Laptop));
var laptopObj = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard("abc");
laptopObj.chipset();
