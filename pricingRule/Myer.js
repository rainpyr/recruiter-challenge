export class Myer {
    premiumPrice = 389.99

    totalPrice (classic, standOut, premium){
        //total price for classic
        let totalClassic = classic.quantity* classic.price
        // total price for standout
        let quotient  =  Math.floor(standOut.quantity / 5);
        let remainder = standOut.quantity % 5;
        let totalStandOut = ((quotient * 4) + remainder) * standOut.price
        //total price for premium
        let totalPremium = premium.quantity * this.premiumPrice
        
        return totalClassic + totalStandOut + totalPremium
    } 
}