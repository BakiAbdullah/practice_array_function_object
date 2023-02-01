function hourTominutes(hours) {
  let minutes = hours * 60;
  return minutes;
}

let hours = 1;
const totalMin = hourTominutes(hours);
console.log(totalMin, 'Minutes in total in', hours, 'hours');