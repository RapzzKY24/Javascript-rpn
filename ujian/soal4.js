//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

const xo = (str)=>{
   const word= {}
   for(const char of str){
      word[char] = (word[char] || 0) + 1;
   }
   if(word["x"] == word["o"]){
      return 'True'
   }else{
      return 'False'
   }
   
   
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
