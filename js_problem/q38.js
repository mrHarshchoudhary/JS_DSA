//Boys and girls
let BandG=(str)=>{
let arr=[]
  let count=0;
  for(let i=0;i<str.length;i++){
    if(arr.includes(str[i])==false){
      arr.push(str[i])
      count++;
    }
  }
  if(count%2==0){
    return "CHAI WITH HER!"
  }
  else{
    return "IGNORE HIM!"
  }
}

console.log(BandG("xiaodao"))