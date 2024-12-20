//soldier and bananas
let ans=(k,n,w)=>{
let a=(w*(w+1))/2
let b=a*k
let borrow=b-n

if(borrow<=0){
  return 0
}
else{
  return borrow
}


}
console.log(ans(3,17,4))