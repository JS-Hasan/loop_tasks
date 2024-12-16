//Display sum of all the odd numbers from 91 to 129.
let totalOdd = 0;
for (let n = 91; n <= 129; n++) {
  if (n % 2 !== 0) {
    totalOdd += n;
    //console.log(n,total)totalOdd
  }
}
console.log("Sum Odd from 91 to 129 : ", totalOdd);

//Display sum of all the even numbers from 51 to 85.
let totalEven = 0;
for (let n = 51; n <= 85; n++) {
  if (n % 2 === 0) {
    totalEven += n;
    //console.log(n,total);
  }
}
console.log("Sum Even from 51 to 85 : ", totalEven);
