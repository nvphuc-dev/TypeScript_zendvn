// Đầy dử các tham số
function userInfo1(name: string, age: number): string{
    return `My name is ${name}, ${age} years old.`;
}
console.log(userInfo1("Kenvin", 20));

// Tham số mặc định
function userInfo2(name: string = "Teng", age: number = 36): string{
    return `My name is ${name}, ${age} years old.`;
}
console.log(userInfo2());

// Tham số khuyết
function userInfo3(name: string = "Tưởng Hân", age?: number): string{
    if(age == null){
        return `My name is ${name}.`;
    }else{
        return `My name is ${name}, ${age} years old.`;
    }
}
// console.log(userInfo3());
console.log(userInfo3("Hứa Tịnh", 18));

function totalLength(x: (string | any[]), y: (string[] | string)): number{
    return x.length + y.length;
}
// console.log(totalLength(["abc", "def"], ["123"]));
console.log(totalLength("abc", ["123"]));
console.log(totalLength([1, "abc", "def"], ["123", "hig"]));
console.log(totalLength([1, "abc", "def"], "123"));
