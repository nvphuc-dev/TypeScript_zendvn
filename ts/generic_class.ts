// ID NAME PRICE  string string number
// ID NAME PRICE  number string string
// ID NAME PRICE  string string boolean

class Product<A, B, C>{
    id: A;
    name: B;
    price: C;

    constructor(id: A, name: B, price: C){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showProductInfo(){
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

let pr1 = new Product<string, string, number>('ID1', "Product01", 20);
pr1.showProductInfo();

let pr2 = new Product<number, string, string>(10, "Product02", "$5");
pr2.showProductInfo();

let pr3 = new Product<string, string, boolean>("A10", "Product03", false);
pr3.showProductInfo();