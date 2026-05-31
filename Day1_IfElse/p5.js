//check whether a year is leap year or not 

let year = 2025;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))  {
    console.log("number is leap year")
}else{
    console.log("number is not leap yaer")
}