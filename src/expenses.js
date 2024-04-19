
let housing = 0;
let utilities = 0;
let groceries = 0;
let transportation = 0;
let insurance = 0;
let medical = 0;
let other = 0;

function expenseSubmit(){
    //console.log("Hello");
    expenseCheck();
    expenseReturn();
}

function expenseCheck(){
    housing = Number(document.getElementById("housing").value);
    utilities = Number(document.getElementById("utilities").value);
    groceries = Number(document.getElementById("groceries").value);
    transportation = Number(document.getElementById("transportation").value);
    insurance = Number(document.getElementById("insurance").value);
    medical = Number(document.getElementById("medical").value);
    other = Number(document.getElementById("other").value);
} // This should probably be changed to an array {type: [amount, frequency], etc}

function expenseCalc(){
    let monthly = housing + utilities + groceries + transportation + insurance + medical + other; //and this is why
    let yearly = monthly * 12;
    return yearly;
}

function amountToHourly(amount){
    let hoursPerWeek = 40;
    let weeksPerYear = 52;
    let hoursPerYear = hoursPerWeek * weeksPerYear;
    let hourly = Math.ceil(100 * amount / hoursPerYear)/100;
    return hourly;
}

function expenseReturn(){   
    let expenses = expenseCalc(); 
    let takeHomeHourly = amountToHourly(expenses);
    let expenseString = (
        "Your yearly expenses are $".concat(expenses,
            "</br>If we assume you work 52 weeks of 40 hours in a year,",
            "</br>meeting expenses will require <b>$", takeHomeHourly, "/hr</b> of your post-tax pay.")
    );
    document.getElementById("yearlyExpense").innerHTML = expenseString;
}