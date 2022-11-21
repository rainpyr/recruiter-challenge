export class SecondBite {
    constructor(){};

    totalPrice (classic, standOut, premium){
        //total price for classic ads
        let quotient  =  Math.floor(classic.quantity / 3);
        let remainder = classic.quantity % 3;
        let totalClassic = (quotient * 2 + remainder) * classic.price
        //total price for the rest of ads
        let totalStandOut = standOut.quantity * standOut.price
        let totalPremium = premium.quantity * premium.price
        

        return totalClassic + totalStandOut + totalPremium
    } 
}