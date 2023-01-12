// 100 created, 101 proccess, 102 finished, ví quản lý các trang thái công việc
enum STATUS { created = 100, proccess = 999, finished = 1000 };
let todoStatus : STATUS = STATUS.proccess;
console.log(todoStatus);