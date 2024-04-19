let maxTaxRate = 0;
let fedFilingStatus = "single";

function incomeSubmit(){
    //console.log("Hello");
    salaryCheck();
}

function salaryCheck(){
    let salary = Number(document.getElementById("salary").value);
    //console.log(salary);    
    maxTaxRate = fedIncome2023.rates[rateFind(salary)];
    let taxAmount = fedTaxAmount(salary);
    let maxTaxPer = maxTaxRate * 100;
    let taxString = (
        "Your highest tax rate is: ".concat(maxTaxPer.toString(), 
        "%</br>Your total tax  is: $", taxAmount)
    );
    document.getElementById("maxRate").innerHTML = taxString;
}

function rateFind(salary){
    //console.log(salary);
    let status = filingStatus();
    let bracket = fedIncome2023[status];
    let nBrackets = bracket.length;
    for(let i = 0; i < nBrackets; i++){
        if(salary < bracket[i]){
            return i-1;
        }
    }
    return nBrackets - 1;
}

function filingStatus(){
    let statusRaw = document.getElementById("filingStatus");
    let fStatus = statusRaw.value;
    //console.log(fStatus);
    return fStatus;
}
