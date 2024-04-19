let baseTax = [];

function baseTaxPerBracket(){
    console.log("Calculating Base Taxes");
    let status = filingStatus();
    let bracket = fedIncome2023[status];
    let nBrackets = bracket.length;
    for(let i = 0; i < nBrackets; i++){
        if(i==0){
            baseTax[i]=0;
        } else{
            baseTax[i]=baseTax[i-1]+((bracket[i]-bracket[i-1])*fedIncome2023.rates[i-1]);
        }
        //console.log(baseTax[i]);
    }
}

function fedTaxAmount(salary){
    baseTaxPerBracket();
    let status = filingStatus();
    let bracket = fedIncome2023[status];
    let rateOffset = rateFind(salary);
    //console.log(bracket[rateOffset]);
    let additionalTax = maxTaxRate * (salary - bracket[rateOffset]);
    let totalTax = baseTax[rateOffset] + additionalTax;
    return totalTax;
}
