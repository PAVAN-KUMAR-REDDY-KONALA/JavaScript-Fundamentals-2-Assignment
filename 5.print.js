const guests=["Anurag","Mithun","Alka","Prabir","Shivam","Farman"]

// User-defined function

// let sentence=""
// function print(){
//     let i=0
//     for(;i<guests.length;i++){
//         if(i!=guests.length-1){
//             sentence+=guests[i]
//             sentence+=", "
//         }
//     }
//     sentence+=guests[i-1]
//     return sentence
// }
// console.log(print());

// In-built function

let ans=guests.join(', ')
console.log(ans);


// o/p : Anurag, Mithun, Alka, Prabir, Shivam, Farman