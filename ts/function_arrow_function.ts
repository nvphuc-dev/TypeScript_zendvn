let f1 = function(i: number): number{
    return i * i;
}
console.log("f1: " + f1(2));

let f2 = function(i: number){
    return i * i;
}
console.log("f2: " + f2(2));

// arrow function
let f3 = (i: number): number => {
    return i * i;
}
console.log("f3: " + f3(9));

let f4 = (i: number) => {
    return i * i;
}
console.log("f4: " + f4(4));

let f5 = (i: number) => i * i;
console.log("f5: " + f5(5));