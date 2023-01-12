class Course2{
    public id: number;
    private name: string;
    protected price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCourseInfo(): void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

class CourseMobile2 extends Course2{
    author: string;
    constructor(id: number, name: string, price: number, author: string){
        super(id, name, price);
        this.author = author;
    }

    checkPro(): void {
        // console.log(this.id);
        // console.log(this.name);
        console.log(this.price);
    }
}

let courseObj2 = new Course2(115, "TypeScript", 100);
// console.log(courseObj2.id);

let courseMobileObj2 = new CourseMobile2(113, "TypeScript", 100, "Kenvin");
// console.log(courseMobileObj2.id);
// console.log(courseMobileObj2.name);
// console.log(courseMobileObj2.price);
courseMobileObj2.checkPro();

/*
                    Inside          Outside         Child Class
public                 o               o                o
private                o               x                x
protected              o               x                o
 */