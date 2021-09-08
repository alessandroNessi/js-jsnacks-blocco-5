function merge(array1,array2){
    let result=[],max;
    if(array2.length<array1.length){
        max=array1.length;
    }else{
        max=array2.length;
    }
    for(let i=0; i<max;i++){
        if(array1[i]!=undefined){
            result.push(array1[i]);
        }
        if(array2[i]!=undefined){
            result.push(array2[i]);
        }
    }
    return result;
}
var array1=[1,2,3], array2=["a","b"];
console.log(merge(array1,array2));