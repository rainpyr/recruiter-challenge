// 3 or 3+ classic 249.99


export class Myer {
    premiumPrice = 389.99
    classicPrice = 249.99

    totalPrice (classic, standOut, premium){
        //total price for classic
        let totalClassic = classic.quantity * classic.price
        if( classic.quantity >= 3) {
            totalClassic = classic.quantity * this.classicPrice
        }
        // if(classic.quantity < 3){
        //     totalClassic = classic.quantity * classic.price
        // } else {
        // }
        // total price for standout
        let quotient  =  Math.floor(standOut.quantity / 5);
        let remainder = standOut.quantity % 5;
        let totalStandOut = ((quotient * 4) + remainder) * standOut.price
        //total price for premium
        let totalPremium = premium.quantity * this.premiumPrice
        
        return totalClassic + totalStandOut + totalPremium
    } 
}