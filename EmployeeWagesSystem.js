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

// b. Show the Day along with Daily Wage using map function
const dailyWageWithDay = dailyData.map(({ day, wage }) => `Day ${day}: $${wage} (Total: $${totalWage})`);
console.log("Daily Wages:", dailyWageWithDay);

// c. Show Days when Full time wage (160) was earned using filter function
const fullTimeDays = dailyData.filter(({ wage }) => wage === 160).map(({ day }) => day);
console.log("Days with Full Time Wage:", fullTimeDays);

// d. Find the first occurrence when Full Time Wage (160) was earned using find function
const firstFullTimeDay = dailyData.find(({ wage }) => wage === 160);
console.log("First Full Time Wage Day:", firstFullTimeDay);

// e. Categorize days into Full Working Days, Part Working Days, and No Working Days
const fullWorkingDays = dailyData.filter(({ hours }) => hours === 8).map(({ day }) => day);
const partWorkingDays = dailyData.filter(({ hours }) => hours === 4).map(({ day }) => day);
const noWorkingDays = dailyData.filter(({ hours }) => hours === 0).map(({ day }) => day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);