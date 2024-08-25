function checksUniqueCharacters(s){
    let set=new Set()
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])){
            console.log(`The input string contains duplicates.`);
            return;
        }
        else{
            set.add(s[i])
        }
    }
    console.log(`The input string contains unique characters`);    
}
checksUniqueCharacters("mithun")
checksUniqueCharacters("anurag")
checksUniqueCharacters("pavan")
checksUniqueCharacters("ganesh")

// O/P :
// The input string contains unique characters
// The input string contains duplicates.
// The input string contains duplicates.
// The input string contains unique characters
