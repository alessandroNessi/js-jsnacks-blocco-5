function popolaZucchine(){
    let zucchine = [];
    while(zucchine.length<10){
        var zucchina={ "tipo":"","peso":"","lunghezza":""};
        // zucchina.tipo="";
        // zucchina.peso="";
        // zucchina.lunghezza="";
        console.log(zucchina);
        zucchina.tipo="zucchina"+Math.floor(Math.random()*100);
        zucchina.peso=Math.floor(Math.random()*200 +50)+"g";
        zucchina.lunghezza=Math.floor(Math.random()*50+1)+"cm";
        zucchine.push(zucchina);
    }
    return zucchine;
}
var zucchine= popolaZucchine();
var zucchineCorte=[], zucchineLunghe=[], pesoCorte=0, pesoLunghe=0;
for(i=0;i<zucchine.length;i++){
    if(parseInt(zucchine[i].lunghezza.replace(/[a-z]/g,""))<15){
        zucchineCorte.push(zucchine[i]);
        pesoCorte+=parseInt(zucchine[i].peso.replace(/[a-z]/g,""));
    }else{
        zucchineLunghe.push(zucchine[i]);
        pesoLunghe+=parseInt(zucchine[i].peso.replace(/[a-z]/g,""));
    }
}
console.log(zucchineCorte);
console.log(`peso zucchine corte:${pesoCorte}g`);
console.log(zucchineLunghe);
console.log(`peso zucchine corte:${pesoLunghe}g`);