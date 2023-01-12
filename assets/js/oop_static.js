var TaskStateStatic;
(function (TaskStateStatic) {
    TaskStateStatic[TaskStateStatic["Created"] = 100] = "Created";
    TaskStateStatic[TaskStateStatic["Active"] = 101] = "Active";
    TaskStateStatic[TaskStateStatic["InActive"] = 102] = "InActive";
    TaskStateStatic[TaskStateStatic["Process"] = 103] = "Process";
    TaskStateStatic[TaskStateStatic["Finished"] = 104] = "Finished";
})(TaskStateStatic || (TaskStateStatic = {}));
var TaskServiceStatic = (function () {
    function TaskServiceStatic(tasks) {
        TaskServiceStatic.tasks = tasks;
    }
    TaskServiceStatic.prototype.getItems = function () {
        return TaskServiceStatic.tasks;
    };
    TaskServiceStatic.showItemsInfo = function () {
        for (var _i = 0, _a = TaskServiceStatic.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log("".concat(TaskServiceStatic.userName, " - ").concat(task.name));
        }
    };
    TaskServiceStatic.userName = "Kenvin";
    return TaskServiceStatic;
}());
var tasksStatic = [
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
        stateStatic: TaskStateStatic.Finished
    }
];
var taskServiceStaticObj = new TaskServiceStatic(tasksStatic);
TaskServiceStatic.showItemsInfo();
