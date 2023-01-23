function rot13(str) {
let newstr="";
let alphabets=[ABCDEFGHIJKLMNOPQRSTUVWXYZ]
str=str.toUpperCase();
for(let i =0;i<str.length;i++)
{
if(str[i]!==charAt)
}
  return str;
}

rot13("SERR PBQR PNZC");

// function shiftCharacters(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let shiftedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toUpperCase();
//         if (alphabet.indexOf(char) !== -1) {
//             let charIndex = alphabet.indexOf(char);
//             let shiftedIndex = (charIndex + 13) % 26;
//             shiftedStr += alphabet[shiftedIndex];
//         } else {
//             shiftedStr += char;
//         }
//     }
//     return shiftedStr;
// }
// console.log(shiftCharacters("HELLO World"));