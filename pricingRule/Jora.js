// discount on premium 4 and 4+ , 379.99/ad

export class Jora {
    // create the discount price variable here
    premiumPrice = 379.99
    
    totalPrice (classic, standOut, premium){
        let totalPremium
        let totalClassic = classic.quantity * classic.price
        let totalStandOut = standOut.quantity * standOut.price
        if( premium.quantity < 4) {
            totalPremium = premium.quantity * premium.price    
        } else {
            totalPremium = premium.quantity * this.premiumPrice
        }
        
        return totalClassic + totalStandOut + totalPremium
    } 
}