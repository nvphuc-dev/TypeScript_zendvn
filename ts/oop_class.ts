
/*class Task{
    id: number;
    name: string;
    state: string;

    constructor(id: number, name: string, state: string){
        this.id = id;
        this.name = name;
        this.state = state;
    }

    showTaskInfo(){
        console.log(`${this.id} - ${this.name} - ${this.state}`);
    }
}
let task1 = new Task(1, "Coding", "Created");
// console.log(task1);
task1.showTaskInfo();
*/

enum TaskState{
    Created = 100,
    Active,
    InActive,
    Process,
    Finished
}

interface TaskInterface {
    id: number;
    name: string;
    state?: TaskState;
}

class TaskService{
    tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]){
        this.tasks = tasks;
    }

    getItems(){
        return this.tasks;
    }
}

let tasks: TaskInterface[] = [
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

let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());