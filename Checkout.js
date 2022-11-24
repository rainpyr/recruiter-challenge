import { Classic } from "./product/Classic.js";
import { Premium } from "./product/Premium.js";
import { StandOut } from "./product/StandOut.js";

export class Checkout{
    constructor(pricingRule){
        this.totalPrice = 0;
        this.classic = new Classic();
        this.premium = new Premium();
        this.standOut = new StandOut();
        this.pricingRule = pricingRule;
    }

    add(product){
        switch (product.name){
           case "classic":
            this.classic.add();
            break;
            case "standOut":
            this.standOut.add();
            break;
            case "premium":
            this.premium.add();
            break;
            default:
                console.log('Something went wrong');
                
        }
    }

    total(){
        this.totalPrice =  this.pricingRule.totalPrice(this.classic,this.standOut,this.premium);
        return this.totalPrice;
    }
}