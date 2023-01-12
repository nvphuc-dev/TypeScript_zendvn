abstract class Laptop{
    public keyboard(): void {
        console.log("Laptop.keyboard");
    }

    // public mainboard(): void {
    //     console.log("Laptop.mainboard");
    // }
    // abstract method
    public abstract mainboard(abc: string): string;

    public chipset(): void {
        console.log("Laptop.chipset");
    }
}

class LaptopDell extends Laptop{
    public keyboard(): void {
        console.log("LaptopDell.keyboard");
    }

    public mainboard(): string {
        console.log("LaptopDell.mainboard");
        return "abc";
    }
}
let laptopObj : Laptop = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard("abc");
laptopObj.chipset();