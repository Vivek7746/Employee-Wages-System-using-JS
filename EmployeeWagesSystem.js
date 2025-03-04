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

const isPartTime = 1;
const isFullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WagesPerHour = 20;

const maxHours = 100;
const workingDays = 10;

let totalEmpHrs = 0, totalWorkingDays = 0;

while (totalEmpHrs <= maxHours && totalWorkingDays < workingDays) {

    totalWorkingDays++;

    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
} 

let empWage = totalEmpHrs * WagesPerHour;

console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Employee Wage: " + empWage);