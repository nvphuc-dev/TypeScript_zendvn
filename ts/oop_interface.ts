interface People{
    name: string;
    eat(): void;
    sleep(): void;
}

interface Fly{
    fly(): void;
}

class Machine{
    calculate(x: number, y: number): number{
        return x + y;
    }
}

class SupperMan extends Machine implements People, Fly {
    name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    eat(): void{
        console.log("eat");
    }

    sleep(): void{
        console.log("sleep");
    }

    fly(): void{
        console.log("fly");
    }
}

let john: SupperMan = new SupperMan('john');
john.eat();
john.sleep();
john.fly();
console.log(john.calculate(2, 3))