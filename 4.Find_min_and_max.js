const products=[
    {name: "Mobile", price: 70000},
    {name: "Laptop", price: 120000},
    {name: "Laptop Bag", price: 20000},
    {name: "Watch", price: 80000},
    {name: "Mobile Charger", price: 1500},
]

let maxPrice=products[0].price,minPrice=products[0].price
let maxIndex=0,minIndex=0
function findMaxMin(){
    for(let i=0;i<products.length;i++){
        if(maxPrice<products[i].price){
            maxIndex=i
            maxPrice=products[i].price
        }  
        if(minPrice>products[i].price){
            minIndex=i
            minPrice=products[i].price
        }  
    }
    console.log(`The product with maximum amount is ${products[maxIndex].name} which is priced at Rs. ${maxPrice}`);
    console.log(`The product with minimum amount is ${products[minIndex].name} which is priced at Rs. ${minPrice}`);
}

findMaxMin()

// o/p:
// The product with maximum amount is Laptop which is priced at Rs. 120000
// The product with minimum amount is Mobile Charger which is priced at Rs. 1500