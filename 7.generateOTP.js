function generateOtp(){
    return Math.floor(Math.random()*9000) +1000
}
console.log(`Here is your OTP : ${generateOtp()}`)
   

// o/p : Here is your OTP : 7724