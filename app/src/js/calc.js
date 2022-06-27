// Set format for results
const setFormatNumber = (dataFormat) => +Math.round(dataFormat);

// PMI rate -- (PMI-Ипотечное страхование)
const getPmiResult = (excludeValue, mortgageAmount, pmiRate) => {
  if (!excludeValue) {
    const result = (mortgageAmount * pmiRate) / 12;
    return setFormatNumber(result);
  }

  return 0;
};

// Property tax function
const propertyTaxCalc = (excludeValue, propertyTax) => {
  if (!excludeValue) {
    const result = propertyTax / 12;
    return setFormatNumber(result);
  }

  return 0;
};

// Home insurance function
const homeInsuranceCalc = (excludeValue, homeInsurance) => {
  if (!excludeValue) {
    const result = homeInsurance / 12;
    return setFormatNumber(result);
  }

  return 0;
};

// Monthly function
const monthlyPaymentCalc = (
  mortgageAmount,
  interestRateResult,
  paymentsMonths,
  pmiResult,
  hoaAmount,
  propertyTaxResult,
  homeInsuranceResult,
) => {
  if (interestRateResult !== 0) {
    const result =
      (mortgageAmount * interestRateResult * (1 + interestRateResult) ** paymentsMonths) /
        ((1 + interestRateResult) ** paymentsMonths - 1) +
      pmiResult +
      hoaAmount +
      propertyTaxResult +
      homeInsuranceResult;
    return setFormatNumber(result);
  }

  return 0;
};

// Monthly PI function
const monthlyPICalc = (mortgageAmount, interestRateResult, paymentsMonths) => {
  const result =
    (mortgageAmount * interestRateResult * (1 + interestRateResult) ** paymentsMonths) /
    ((1 + interestRateResult) ** paymentsMonths - 1);

  return setFormatNumber(result);
};

// Total cost function
const totalCostAmountCalc = (monthlyPaymentResult, paymentsMonths) => {
  const result = monthlyPaymentResult * paymentsMonths;

  return setFormatNumber(result);
};

const calc = (elements, watchedState) => {
  const { form, result, donutData } = watchedState;
  const { values, exclude } = form;

  const homePrice = values['home-price'];
  const downPayment = values['down-payment'];
  const interestRate = values['interest-rate'];
  const homeInsurance = values['home-insurance'];
  const propertyTax = values['property-tax'];
  const pmiRate = values['pmi-rate'];
  const hoaAmount = values['hoa-dues'];
  const { term } = values;
  const monthInYear = 12;
  const percentBase = 100;
  const mortgageAmount = setFormatNumber(homePrice - downPayment); // основной кредит, основная сумма
  const paymentsMonths = term * monthInYear; // количество месяцев
  const interestRateResult = interestRate / percentBase / monthInYear; // процентная ставка по еж.платежу

  const pmiResult = getPmiResult(exclude['pmi-rate'], mortgageAmount, pmiRate);

  const homeInsuranceResult = homeInsuranceCalc(exclude['property-tax'], homeInsurance);
  const propertyTaxResult = propertyTaxCalc(exclude['property-tax'], propertyTax);

  const monthlyPaymentResult = monthlyPaymentCalc(
    mortgageAmount,
    interestRateResult,
    paymentsMonths,
    pmiResult,
    hoaAmount,
    propertyTaxResult,
    homeInsuranceResult,
  );
  const monthlyPIResult = monthlyPICalc(mortgageAmount, interestRateResult, paymentsMonths);

  const totalCostAmountResult = totalCostAmountCalc(monthlyPaymentResult, paymentsMonths);

  // * RESULTS
  // calcMortgageAmount - сумма ипотеки
  result['mortgage-amount'] = mortgageAmount;
  // calcMonthlyPayment - ежемесячный платеж
  result['monthly-payment'] = monthlyPaymentResult;
  // calcTotalCost - общая сумма выплат
  result['mortgage-insurance'] = pmiResult;
  // Total Cost Of Mortgage
  result['mortgage-total-cost'] = totalCostAmountResult;
  // donut data list
  donutData.forEach(({ key }, index) => {
    switch (key) {
      case 'pi':
        donutData[index].data = monthlyPIResult;
        break;
      case 'insurance':
        donutData[index].data = homeInsuranceResult;
        break;
      case 'taxes':
        donutData[index].data = propertyTaxResult;
        break;
      case 'pmi':
        donutData[index].data = pmiResult;
        break;
      case 'hoa':
        donutData[index].data = hoaAmount;
        break;

      default:
        break;
    }
  });
};

export default calc;
