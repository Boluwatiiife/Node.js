
console.log('before immediate');

setImmediate((argg)=>{
    console.log(`executing immediate: ${argg}`);
},'so immediate');

console.log('after immediate');
