var TaskState;
(function (TaskState) {
    TaskState[TaskState["Created"] = 100] = "Created";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["InActive"] = 102] = "InActive";
    TaskState[TaskState["Process"] = 103] = "Process";
    TaskState[TaskState["Finished"] = 104] = "Finished";
})(TaskState || (TaskState = {}));
var TaskService = (function () {
    function TaskService(tasks) {
        this.tasks = tasks;
    }
    TaskService.prototype.getItems = function () {
        return this.tasks;
    };
    return TaskService;
}());
var tasks = [
    {
        id: 1,
        name: "Coding"
    },
    {
        id: 2,
        name: "Study TypeScript"
    },
    {
        id: 3,
        name: "Kiss my GIRL ^.^",
        state: TaskState.Finished
    }
];
var taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
