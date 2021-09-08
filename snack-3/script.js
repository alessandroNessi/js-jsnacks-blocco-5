function reverse(stringa){
    let reversed="";
    for(let i=stringa.length-1; i>=0;i--){
        reversed+=stringa[i];
    }
    return reversed;
}
var parola=prompt("scrivi una parola");
alert(reverse(parola));