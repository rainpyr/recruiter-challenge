export class Classic {
    Description = "Offers the most basic level of advertisement";
    price = 269.99;
    name = "classic";
    constructor(){
        this.quantity = 0;
    }

    add(){
        this.quantity++;
    }
}