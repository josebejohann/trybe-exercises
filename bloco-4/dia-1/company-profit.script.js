let costCompany = 50;
let finalCostCompany = costCompany + costCompany * 0.2;
let salesValueCompany = 100;

function handleCompanyProfit(finalCost, salesValue) {
  if (finalCost <= 0 || salesValue <= 0) {
    return 'Error!';
  }

  let profit = salesValue * 1000 - finalCost * 1000;

  return profit;
}

console.log(handleCompanyProfit(finalCostCompany, salesValueCompany));
