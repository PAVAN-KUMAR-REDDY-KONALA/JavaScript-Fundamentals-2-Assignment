const eventDate='2024-09-08'


function calculateRemainingDays(eventDate){
    let d1=new Date(eventDate)
    let d2=new Date()
    let milliSeconds1=d1.valueOf()      
    let milliSeconds2=d2.valueOf()
    let diff=Math.abs(milliSeconds1-milliSeconds2)
    return Math.ceil(diff/(1000*60*60*24))
}

console.log(`The number of days between ${eventDate} and current_date(${new Date().toDateString()}) are : ${calculateRemainingDays(eventDate)}`);

// O/P : The number of days between 2024-09-08 and current_date(Sun Aug 25 2024) are : 14