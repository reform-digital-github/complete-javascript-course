// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// Using a Debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

*/

/*
// Coding Challenge #1

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    // ... 17°C in 1 days ... 21°C in 2 days... 23°C in 3 days
    str += ` ... ${arr[i]}°C in ${i + 1} days`;
  }
  console.log(str + ' ...');
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/

//
