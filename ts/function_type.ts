function personInfo1(name: string, age: number): string{
    return `My name ${name}, ${age} years old.`;
}
console.log(personInfo1("Teng", 18));

let personInfo2 = function(name: string, age: number): string{
    return `My name ${name}, ${age} years old.`;
}
console.log(personInfo2("Tưởng Hân", 18));

let personInfo3: (name: string, age: number) => string = function(name, age){
    return `My name ${name}, ${age} years old.`;
}
console.log(personInfo3("Hứa Tịnh", 18));