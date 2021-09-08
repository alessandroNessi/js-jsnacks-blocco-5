function popolaZucchine(){
    var zucchina;
    let zucchine = [];
    while(zucchine.length<10){
        // zucchina.tipo="";
        // zucchina.peso="";
        // zucchina.lunghezza="";
        zucchina={ "tipo":"","peso":"","lunghezza":""};
        zucchina.tipo="zucchina"+Math.floor(Math.random()*100);
        zucchina.peso=Math.floor(Math.random()*200 +50)+"g";
        zucchina.lunghezza=Math.floor(Math.random()*100+10)+"cm";
        zucchine.push(zucchina);
    }
    return zucchine;
}
var zucchine= popolaZucchine();
console.log(zucchine);