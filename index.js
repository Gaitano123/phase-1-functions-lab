// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >=42) {
        return pickupLocation - 42
    }
    else {
        return 42 - pickupLocation
    }
}
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264
}
function distanceTravelledInFeet(start,destination){
    if (destination >= start){
        return (destination - start ) * 264
    }
    else {
        return (start - destination) *264
    }
}
function calculatesFarePrice(start,destination) {
    if (distanceTravelledInFeet(start,destination) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(start,destination) >400 && distanceTravelledInFeet(start,destination) <=2000) {
        return 2.56
    }
    else if (distanceTravelledInFeet(start,destination) >2000 && distanceTravelledInFeet(start,destination) <=2500) {
        return 25
    }
    else{
        return "cannot travel that far"
    }
}