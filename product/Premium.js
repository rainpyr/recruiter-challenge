export class Premium {
    Description = "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility";
    price = 394.99;
    name = "premium";
    constructor(){
        this.quantity = 0;
    }

    add(){
        this.quantity++;
    }
}