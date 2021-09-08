function spplice(array,a,b){
    if(a>0&&a<b&&b<array.length){
        let result=[];
        while(a<b){
            result.push(array[a-1]);
            a++;
        }
        return result;
    }
    return undefined;
}
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(spplice(array,3,6));