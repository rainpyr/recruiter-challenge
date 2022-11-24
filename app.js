import { Classic } from "./product/Classic.js";
import { Premium } from "./product/Premium.js";
import { StandOut } from "./product/StandOut.js";
import {ACRoaster} from "./pricingRule/ACRoaster.js";
import {Myer} from "./pricingRule/Myer.js";
import {SecondBite} from "./pricingRule/SecondBite.js";
import {Default} from  "./pricingRule/Default.js";
import { Checkout } from "./Checkout.js";
import {Jora} from "./pricingRule/Jora.js"

//create a checkout object
var checkout = new Checkout(new Myer());

checkout.add(new Classic());
// checkout.add(new Classic());
// checkout.add(new Classic());
// checkout.add(new StandOut());
// checkout.add(new StandOut());
// checkout.add(new StandOut());
// checkout.add(new Premium());
// checkout.add(new Premium());
// checkout.add(new Premium());
// checkout.add(new Premium());

checkout.total();

console.log(checkout.totalPrice);

