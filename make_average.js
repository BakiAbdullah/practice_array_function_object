function make_avg(num1, num2, num3) {
  let sumOfNumbers = num1 + num2 + num3;
  let numAverage = sumOfNumbers / 3;
  return numAverage;
}

const averageValue = make_avg(20, 20, 20);
console.log(averageValue);