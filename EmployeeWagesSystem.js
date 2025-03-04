function getWorkingHours(empCheck) {
    
    let empWage = Math.floor(Math.random() * 10);
    return empWage;
}

function calcDailyWage(empHrs) {

    let WagesPerHour = 20;
    return empHrs * WagesPerHour;
}

const maximumHours = 160;
const workingDays = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= maximumHours && totalWorkingDays < workingDays) {
    totalWorkingDays++;

    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Employee Wage: " + empWage);
console.log("arr: " + empDailyWageArr);