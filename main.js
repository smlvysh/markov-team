function arrayPlusArray(arr1, arr2) {
  let connect = arr1.concat(arr2);
  let result = connect.reduce((acc, num)=> acc + num, 0);
  return result;
}

console.log(arrayPlusArray)


let fam= [4, 12, 18, 45, 78, 23]
let min=[0];
let max=[0];
for(let i=0; i<fam.length; i++){
    if (fam[i]<5){
        min = fam[i];
    }
    if(fam[i]>max){
        max=fam[i];
    }
}


console.log("Youngest", min);
console.log("Oldest", max);


let text= "hello"
console.log(text.slice(1, 4))

let text1= "frontend"
console.log(text1.slice(1, 7))



function fullText(str){
    let result = "";
    for (let i=0; i<fullText.length; i++){
        if(str[i] !==" "){
result += str[i]
        }
    }
    return result;
}
console.log(fullText("H e l l o H a s a n a k a"))