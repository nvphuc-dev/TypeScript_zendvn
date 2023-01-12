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
var Course = (function () {
    function Course(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Course.prototype.showCourseInfo = function () {
        console.log("".concat(this.id, " - ").concat(this.name, " - ").concat(this.price));
    };
    return Course;
}());
var CourseMobile = (function (_super) {
    __extends(CourseMobile, _super);
    function CourseMobile(id, name, price, author) {
        var _this = _super.call(this, id, name, price) || this;
        _this.author = author;
        return _this;
    }
    CourseMobile.prototype.showCourseInfo = function () {
        _super.prototype.showCourseInfo.call(this);
        console.log(this.author);
    };
    return CourseMobile;
}(Course));
var courseObj = new Course(1, "TypeScript", 100);
courseObj.showCourseInfo();
var courseMobileObj = new CourseMobile(1, "iOS", 100, "Apple");
courseMobileObj.showCourseInfo();
