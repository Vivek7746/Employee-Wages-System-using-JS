const isPartTime = 1;
const isFullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WagesPerHour = 20;

let empHrs = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;
console.log("empCheck: " + empCheck);
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

console.log("empHrs: " + empHrs);

let empWage = empHrs * WagesPerHour;
console.log("Employee's Wage: " + empWage);