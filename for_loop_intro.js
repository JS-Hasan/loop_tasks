//For Loop

let numbers = [21, 65, 89, 34, 80, 10];
for (let num = 0; num < numbers.length; num++) {
  const element = numbers[num];
  console.log(element);
}

let number_list = [21, 64, 78, 34, 90, 43, 73];
let index = 0;
for (let numOne of number_list) {
  console.log("Array : ", index, "Element : ", numOne);
  index = index + 1;
}
