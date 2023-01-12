/*
function funcAbc(x: string): number{
    return 100;
}
function funcAbc(x: string): string{
    return 100;
}
funcAbc("abc");
*/
function funcAbc(x: string): number;
function funcAbc(x: number): string;
function funcAbc(x: boolean): boolean;
function funcAbc(x: any): any{
    if(typeof x == "string"){
        return 100;
    }else if(typeof x == "number"){
        return "abc";
    }else{
        return true;
    }
}
console.log(funcAbc(true));