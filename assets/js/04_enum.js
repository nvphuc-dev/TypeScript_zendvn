var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 100] = "created";
    STATUS[STATUS["proccess"] = 999] = "proccess";
    STATUS[STATUS["finished"] = 1000] = "finished";
})(STATUS || (STATUS = {}));
;
var todoStatus = STATUS.proccess;
console.log(todoStatus);
