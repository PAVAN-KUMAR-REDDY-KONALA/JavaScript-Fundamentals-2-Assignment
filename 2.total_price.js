function calculateTotalCartValue(...a){
    let totalSum=0
    for(let i=0;i<a.length;i++){
        totalSum+=a[i]
    }
    return totalSum
}

let ans=calculateTotalCartValue(125,20,30)
console.log(`The total cart value is : ${ans}`);

// o/p : The total cart value is : 175
