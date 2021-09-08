function merge(array1,array2){
    let result=[];
    for(let i=0; i<array1.length&&i<array2.length;i++){
        if(array1[i]!=undefined){
            result.push(array1[i]);
        }
        if(array1[i]!=undefined){
            result.push(array2[i]);
        }
    }
    return result;
}
var array1=[1,2,3], array2=["a","b","c"];
console.log(merge(array1,array2));