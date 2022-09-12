var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  
  console.log("If escope ", a, b, c);
}

console.log("Global escope ", a, b, c);
