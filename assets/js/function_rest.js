function showStudentInfo(name) {
    var course = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        course[_i - 1] = arguments[_i];
    }
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("Kenvin", "ES6", "PHP", "TypeScript"));
