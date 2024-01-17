let a = 10;
let b = 1;
document.getElementById("salary").value = b;

let x = a + b;
document.getElementById("demo").innerHTML = x;

console.log(fedRates2023.single[2]);

function salaryCheck(){
    let salary = Number(document.getElementById("salary").value);
    //console.log(salary);    
    let a = 10;
    let x = fedRates2023.rates[rateFind(salary)];
    document.getElementById("demo").innerHTML = x;
}

function rateFind(salary){
    //console.log(salary);
    let nBrackets = fedRates2023.single.length;
    for(let i = 0; i < nBrackets; i++){
        if(salary < fedRates2023.single[i]){
            console.log(i);
            return i-1;
        }
    }
    return nBrackets - 1;
}

