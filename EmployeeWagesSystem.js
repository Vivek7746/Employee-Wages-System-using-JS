// Employee Daily Wage and Daily Hour Data
const dailyData = [
    { day: 1, wage: 160, hours: 8 },
    { day: 2, wage: 80, hours: 4 },
    { day: 3, wage: 160, hours: 8 },
    { day: 4, wage: 160, hours: 8 },
    { day: 5, wage: 80, hours: 4 },
    { day: 6, wage: 160, hours: 8 },
    { day: 7, wage: 0, hours: 0 }
];

// a. Store Day wise Wage and Hours using Maps
const dayWiseWage = new Map();
const dayWiseHours = new Map();
dailyData.forEach(({ day, wage, hours }) => {
    dayWiseWage.set(day, wage);
    dayWiseHours.set(day, hours);
});
console.log("Day Wise Wage Map:", dayWiseWage);
console.log("Day Wise Hours Map:", dayWiseHours);

// b. Compute total wage and total hours worked using reduce and arrow functions
const totalWage = Array.from(dayWiseWage.values()).reduce((total, wage) => total + wage, 0);
const totalHours = Array.from(dayWiseHours.values()).reduce((total, hours) => total + hours, 0);
console.log("Total Wage:", totalWage);
console.log("Total Hours Worked:", totalHours);

// c. Show the Day along with Daily Wage using map function
const dailyWageWithDay = Array.from(dayWiseWage.entries()).map(([day, wage]) => `Day ${day}: $${wage} (Total: $${totalWage})`);
console.log("Daily Wages:", dailyWageWithDay);

// d. Show Days when Full time wage (160) was earned using filter function
const fullTimeDays = Array.from(dayWiseWage.entries()).filter(([day, wage]) => wage === 160).map(([day]) => day);
console.log("Days with Full Time Wage:", fullTimeDays);

// e. Find the first occurrence when Full Time Wage (160) was earned using find function
const firstFullTimeDay = Array.from(dayWiseWage.entries()).find(([day, wage]) => wage === 160);
console.log("First Full Time Wage Day:", firstFullTimeDay);

// f. Categorize days into Full Working Days, Part Working Days, and No Working Days
const fullWorkingDays = Array.from(dayWiseHours.entries()).filter(([day, hours]) => hours === 8).map(([day]) => day);
const partWorkingDays = Array.from(dayWiseHours.entries()).filter(([day, hours]) => hours === 4).map(([day]) => day);
const noWorkingDays = Array.from(dayWiseHours.entries()).filter(([day, hours]) => hours === 0).map(([day]) => day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);