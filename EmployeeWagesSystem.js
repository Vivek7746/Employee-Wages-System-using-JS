function getWorkingHours(empCheck) {
    switch(empCheck) {
        case isPartTime:
            empHrs = PartTimeHours;
            break;
        case isFullTime:
            empHrs = FullTimeHours;
            break;
        default:
            empHrs = 0;
    }
    
    let empWage = empHrs * WagesPerHour;
    return empWage;
}

const TotalWorkingDays = 20;
let empHrs = 0;

const isPartTime = 1;
const isFullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WagesPerHour = 20;

for(let day = 1; day <= TotalWorkingDays; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WagesPerHour;
console.log("Total Hrs: " + empHrs + " Employee Wage: " + empWage);