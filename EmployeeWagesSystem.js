// Employee Daily Wage and Daily Hour Data
const dailyData = [
    { day: 1, hours: 8, wage: 160 },
    { day: 2, hours: 4, wage: 80 },
    { day: 3, hours: 8, wage: 160 },
    { day: 4, hours: 8, wage: 160 },
    { day: 5, hours: 4, wage: 80 },
    { day: 6, hours: 8, wage: 160 },
    { day: 7, hours: 0, wage: 0 }
];

console.log("Daily Data:", dailyData);

// a. Compute total wage and total hours worked using reduce and arrow functions
const totalWage = dailyData.reduce((total, { wage }) => total + wage, 0);
const totalHours = dailyData.reduce((total, { hours }) => total + hours, 0);
console.log("Total Wage:", totalWage);
console.log("Total Hours Worked:", totalHours);

// b. Show the full working days using forEach
console.log("Full Working Days:");
dailyData.forEach(({ day, hours }) => {
    if (hours === 8) console.log(`Day ${day}`);
});

// c. Show Part working days using Map by reducing to String Array
const partWorkingDays = dailyData
    .filter(({ hours }) => hours === 4)
    .map(({ day }) => `Day ${day}`);
console.log("Part Working Days:", partWorkingDays);

// d. No working days only using Map function
const noWorkingDays = dailyData
    .map(({ day, hours }) => (hours === 0 ? `Day ${day}` : null))
    .filter(day => day !== null);
console.log("No Working Days:", noWorkingDays);