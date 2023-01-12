function userInfo1(name, age) {
    return "My name is ".concat(name, ", ").concat(age, " years old.");
}
console.log(userInfo1("Kenvin", 20));
function userInfo2(name, age) {
    if (name === void 0) { name = "Teng"; }
    if (age === void 0) { age = 36; }
    return "My name is ".concat(name, ", ").concat(age, " years old.");
}
console.log(userInfo2());
function userInfo3(name, age) {
    if (name === void 0) { name = "Tưởng Hân"; }
    if (age == null) {
        return "My name is ".concat(name, ".");
    }
    else {
        return "My name is ".concat(name, ", ").concat(age, " years old.");
    }
}
console.log(userInfo3("Hứa Tịnh", 18));
function totalLength(x, y) {
    return x.length + y.length;
}
console.log(totalLength("abc", ["123"]));
console.log(totalLength([1, "abc", "def"], ["123", "hig"]));
console.log(totalLength([1, "abc", "def"], "123"));
