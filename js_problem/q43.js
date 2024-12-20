let Bit = (n, statements) => {
  let x = 0; 
  for (let i = 0; i < n; i++) {
     
      if (statements[i].includes('++')) {
          x++; 
      }    
      else if (statements[i].includes('--')) {
          x--; 
      }
  }
  return x;
}

const n = 3; 
const statements = ["++X", "X++", "--X"]; 
console.log(Bit(n, statements)); 
