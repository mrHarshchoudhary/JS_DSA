//. Translation

let reverse=(s,t)=>{
let rev=s.split('').reverse().join('')//join is use to concate the string
if(rev==t){
  return "YES"
}
else{
  return "NO"
}
}
console.log(reverse("abb","aba"))