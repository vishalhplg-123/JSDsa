//check if anumber is divisible by both 3 and 5, only 3 ,only 5 , or neither

let nub = 9;

if(nub % 3 == 0 && nub % 5 == 0){
    console.log("num is divisible by both")
}else if(nub % 3 == 0){
    console.log("num is only divisible by 3")
}else if(nub % 5 == 0){
    console.log("nub is only divisible by 5")
}else{
    console.log("nub neither is divisible")
}