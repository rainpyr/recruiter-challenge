export class Default {

    totalPrice (classic, standOut, premium){
        let totalClassic = classic.quantity * classic.price
        let totalStandOut = standOut.quantity * standOut.price
        let totalPremium = premium.quantity * premium.price
        
        return totalClassic + totalStandOut + totalPremium
    } 
}