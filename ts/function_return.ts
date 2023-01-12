// Hàm không trả về.
// function funcNoReturn(){
function funcNoReturn(): void{
    console.log("Hello, funcNoReturn.");
}
funcNoReturn();

function funcReturnNumber(): number{
    // do something...
    return 2;
}
console.log(funcReturnNumber());

function funcReturnArray(): string[]{
    // do something...
    return ["a", "b"];
}
console.log(funcReturnArray());

function funcReturnAny(): any{
    // do something...
    return ["a", "b"];
}
console.log(funcReturnAny());