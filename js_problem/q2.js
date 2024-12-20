
//Domino polling
  let ans=(a,b)=>{
 
if(a>b){
  return `rows must be greater then column`
}
 if(a<1||b<1||a>16||b>16){
  return `give me valid Input please`
}
 let p=Math.floor((a*b)/2)
 return p;
}
console.log(ans(3,3))
