let users=["pavan","ganesh","rakesh","mithun"]

function isUserPresent(name){
    for(let i=0;i<users.length;i++){
        if(users[i]===name){
            console.log(`Yes ${name} is a valid user`);
            return;
        }
    }
    console.log(`No ${name} is not a valid user`);
}

isUserPresent("mithun")
isUserPresent("someone")
isUserPresent("pavan")

// o/p:
// Yes mithun is a valid user
// No someone is not a valid user
// Yes pavan is a valid user

