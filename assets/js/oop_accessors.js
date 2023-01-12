var Course3 = (function () {
    function Course3(name) {
        this._name = name;
    }
    Course3.prototype.showCourseInfo = function () {
        console.log("".concat(this._name));
    };
    Object.defineProperty(Course3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return Course3;
}());
var course3Obj = new Course3('TypeScript');
console.log(course3Obj);
console.log("Name " + course3Obj.name);
course3Obj.name = "TypeScript training";
console.log("Name " + course3Obj.name);
