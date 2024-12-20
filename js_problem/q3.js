let elephant=(a)=>{
  let mincount=Math.floor(a/5)
  let rem=Math.floor(a%5);
  if(rem>0){
    mincount++
    return mincount;
  }
  else{
    return mincount;
  }

}

console.log(elephant(12))