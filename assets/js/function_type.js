function personInfo1(name, age) {
    return "My name ".concat(name, ", ").concat(age, " years old.");
}
console.log(personInfo1("Teng", 18));
var personInfo2 = function (name, age) {
    return "My name ".concat(name, ", ").concat(age, " years old.");
};
console.log(personInfo2("Tưởng Hân", 18));
var personInfo3 = function (name, age) {
    return "My name ".concat(name, ", ").concat(age, " years old.");
};
console.log(personInfo3("Hứa Tịnh", 18));
