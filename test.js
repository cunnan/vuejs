var arr1=[2,4,6,4,2];
var b=Array.prototype.every.call(arr1,function(elem){
    return elem%2==0;
})
console.log(b)