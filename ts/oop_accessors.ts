class Course3{
    private _name: string;
    constructor(name: string){
        this._name = name;
    }

    showCourseInfo(): void{
        console.log(`${this._name}`);
    }

    public get name(): string{
        return this._name;
    }

    public set name(v: string){
        this._name = v;
    }
}

let course3Obj = new Course3('TypeScript');
console.log(course3Obj);
console.log("Name " + course3Obj.name);
course3Obj.name = "TypeScript training";
console.log("Name " + course3Obj.name);