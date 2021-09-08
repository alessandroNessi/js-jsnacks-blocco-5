function reverse(stringa){
    let reversed=[];
    reversed.length=stringa.length;
    for(let i=0; i<stringa.length;i++){
        reversed[stringa.length-1-i]=stringa[i];
    }
    return reversed.join("");
}
var parola=prompt("scrivi una parola");
console.log(reverse(parola));