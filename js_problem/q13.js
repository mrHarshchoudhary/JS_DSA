//A. Petya and Strings
let comapre=(str1,str2)=>{
  let a=str1.toLowerCase()
  let b=str2.toLowerCase()
  if(a<b)return -1
  else if(a>b)return 1;
  else return 0
}
console.log(comapre("abs","abz"))