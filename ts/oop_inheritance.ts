class Course{
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCourseInfo(): void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

class CourseMobile extends Course{
    author: string;
    constructor(id: number, name: string, price: number, author: string){
        super(id, name, price);
        this.author = author;
    }

    showCourseInfo(): void {
        super.showCourseInfo();
        console.log(this.author);
    }
}

let courseObj = new Course(1, "TypeScript", 100);
courseObj.showCourseInfo();

let courseMobileObj = new CourseMobile(1, "iOS", 100, "Apple");
courseMobileObj.showCourseInfo();