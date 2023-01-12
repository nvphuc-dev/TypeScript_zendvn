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
var Course2 = (function () {
    function Course2(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Course2.prototype.showCourseInfo = function () {
        console.log("".concat(this.id, " - ").concat(this.name, " - ").concat(this.price));
    };
    return Course2;
}());
var CourseMobile2 = (function (_super) {
    __extends(CourseMobile2, _super);
    function CourseMobile2(id, name, price, author) {
        var _this = _super.call(this, id, name, price) || this;
        _this.author = author;
        return _this;
    }
    CourseMobile2.prototype.checkPro = function () {
        console.log(this.price);
    };
    return CourseMobile2;
}(Course2));
var courseObj2 = new Course2(115, "TypeScript", 100);
var courseMobileObj2 = new CourseMobile2(113, "TypeScript", 100, "Kenvin");
courseMobileObj2.checkPro();
