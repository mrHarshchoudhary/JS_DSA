let ans=(str)=>{
 
   if(str.length>10){
   let a= str.length-2
    let ab=str[0]+a+str[str.length-1]
   
   return ab
   }
   else{
    return str
   }
}
console.log(ans("internationalization"))