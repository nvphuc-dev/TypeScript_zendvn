var Product = (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.showProductInfo = function () {
        console.log("".concat(this.id, " - ").concat(this.name, " - ").concat(this.price));
    };
    return Product;
}());
var pr1 = new Product('ID1', "Product01", 20);
pr1.showProductInfo();
var pr2 = new Product(10, "Product02", "$5");
pr2.showProductInfo();
var pr3 = new Product("A10", "Product03", false);
pr3.showProductInfo();
