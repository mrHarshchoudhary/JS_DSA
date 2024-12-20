function countPairs(n, m) {
  if ((n + m) % 2 === 0 && (n - m) % 2 === 0) {
      const a = (n + m) / 2;
      const b = (n - m) / 2;
      if (a >= 0 && b >= 0) {
          return 1; 
      }
  }
  return 0; 
}
console.log(countPairs(9,3))