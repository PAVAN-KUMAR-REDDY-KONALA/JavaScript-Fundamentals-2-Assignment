const sentence="please please submit                    your  assignment on time, your     assignments are important "
let mp=new Map()
function wordCounter(str){
    str=str.trim()
    let arr=str.split(/\s+/) // it is used to split the string with spaces(with multiple spaces also)
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toLowerCase().replace(',', '');
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1)
        }
        else{
            mp.set(arr[i],1)
        }
    }
    return mp;
}
console.log(wordCounter(sentence));
 
//  O/P :
// Map(9) {
//     'please' => 2,
//     'submit' => 1,
//     'your' => 2,
//     'assignment' => 1,
//     'on' => 1,
//     'time' => 1,
//     'assignments' => 1,
//     'are' => 1,
//     'important' => 1
//   }