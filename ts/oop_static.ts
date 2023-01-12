enum TaskStateStatic{
    Created = 100,
    Active,
    InActive,
    Process,
    Finished
}

interface TaskInterface {
    id: number;
    name: string;
    stateStatic?: TaskStateStatic;
}

class TaskServiceStatic{
    public static userName: string = "Kenvin";
    static tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]){
        TaskServiceStatic.tasks = tasks;
    }

    getItems(){
        return TaskServiceStatic.tasks;
    }
    
    static showItemsInfo(): void{
        for(let task of TaskServiceStatic.tasks){
            console.log(`${TaskServiceStatic.userName} - ${task.name}`);
        }
    }
}

let tasksStatic: TaskInterface[] = [
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

let taskServiceStaticObj = new TaskServiceStatic(tasksStatic);
// console.log(taskServiceStaticObj.getItems());
// console.log(TaskServiceStatic.userName);
TaskServiceStatic.showItemsInfo();