let userWage = 3500;

function handleINSSDiscount(wage) {
  if (wage < 0) {
    let wageDiscount = 'Error!';
    return wageDiscount;
  } else if (wage <= 1556.94) {
    let wageDiscount = wage - wage * 0.08;

    return wageDiscount;
  } else if (wage >= 1556.95 && wage <= 2594.92) {
    let wageDiscount = wage - wage * 0.09;

    return wageDiscount;
  } else if (wage >= 2594.93 && wage <= 5189.82) {
    let wageDiscount = wage - wage * 0.11;

    return wageDiscount;
  } else {
    let wageDiscount = wage - 570.88;

    return wageDiscount;
  }
}

let wageDiscount = handleINSSDiscount(userWage);

function handleIRDiscount() {
  if (wageDiscount < 0) {
    let finalWageDiscount = 'Error!';

    return finalWageDiscount;
  } else if (wageDiscount <= 1903.98) {
    return 0;
  } else if (wageDiscount >= 1903.99 && wageDiscount <= 2826.65) {
    let finalWageDiscount = wageDiscount * 0.075 - 142.8;

    return finalWageDiscount;
  } else if (wageDiscount >= 2826.67 && wageDiscount <= 3751.05) {
    let finalWageDiscount = wageDiscount * 0.15 - 354.8;

    return finalWageDiscount;
  } else if (wageDiscount >= 3751.06 && wageDiscount <= 4664.68) {
    let finalWageDiscount = wageDiscount * 0.225 - 636.13;

    return finalWageDiscount;
  } else {
    let finalWageDiscount = wageDiscount * 0.275 - 869.36;

    return finalWageDiscount;
  }
}

let finalWage = handleINSSDiscount(userWage) - handleIRDiscount(userWage);

console.log(finalWage);
