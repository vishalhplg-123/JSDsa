//job elibility

let age = 30;
let gradPer = 65
let experiences = 4
let intership = "completed"

if((age >= 20 && age <= 35) &&  gradPer >= 60){
    if(experiences >= 2 || intership == "completed"){
        console.log("eligible for job")
    }else{
        console.log("not eligible for vote")
    }
}else{
    console.log("not eligible for vote")
}