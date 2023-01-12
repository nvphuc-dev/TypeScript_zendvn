// type_assertions - chuyển đổi qua lại giữa các kiểu dữ liệu.
let mVar: any = "TypeScript Training";
// let total = mVar.length;
// let total = (<string>mVar).length;
let total = (mVar as string).length;

console.log(total);