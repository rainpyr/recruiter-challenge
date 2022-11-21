export class ACRoaster {
    standOutPrice = 299.99    

    totalPrice (classic, standOut, premium){
        let totalClassic = classic.quantity* classic.price
        let totalStandOut = standOut.quantity * this.standOutPrice
        let totalPremium = premium.quantity * premium.price
        
        return totalClassic + totalStandOut + totalPremium
    } 
}