//Word 
let vasya=(str)=>{
let upper=0;
let lower=0;
for(let c of str){
  if(c>='A'&&c<='Z'){
    upper++;
  }
  else if(c>='a'&&c<='z'){
    lower++
  }

}
if(upper<=lower){
  return str.toLowerCase()
}
else{
return str.toUpperCase()
}

}
console.log(vasya("maTRIx"))