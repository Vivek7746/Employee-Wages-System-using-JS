// Employee Daily Wage Data
const dailyWages = [
    { day: 1, wage: 160 },
    { day: 2, wage: 80 },
    { day: 3, wage: 160 },
    { day: 4, wage: 160 },
    { day: 5, wage: 80 },
    { day: 6, wage: 160 },
    { day: 7, wage: 0 }
];

// a. Store Day wise Wage using Map
const dayWiseWage = new Map();
dailyWages.forEach(day => dayWiseWage.set(day.day, day.wage));
console.log("Day Wise Wage Map:", dayWiseWage);

// b. Compute total wage using the Map
const totalWage = Array.from(dayWiseWage.values()).reduce((total, wage) => total + wage, 0);
console.log("Total Wage:", totalWage);

// c. Show the Day along with Daily Wage using map function
const dailyWageWithDay = Array.from(dayWiseWage.entries()).map(([day, wage]) => `Day ${day}: $${wage} (Total: $${totalWage})`);
console.log("Daily Wages:", dailyWageWithDay);

// d. Show Days when Full time wage (160) was earned using filter function
const fullTimeDays = Array.from(dayWiseWage.entries()).filter(([day, wage]) => wage === 160).map(([day]) => day);
console.log("Days with Full Time Wage:", fullTimeDays);

// e. Find the first occurrence when Full Time Wage (160) was earned using find function
const firstFullTimeDay = Array.from(dayWiseWage.entries()).find(([day, wage]) => wage === 160);
console.log("First Full Time Wage Day:", firstFullTimeDay);

// f. Check if every element of full time wage is truly holding Full Time Wage (160)
const allFullTime = Array.from(dayWiseWage.values()).every(wage => wage === 160);
console.log("Every day is Full Time Wage:", allFullTime);

// g. Check if there is any Part Time Wage (80)
const hasPartTime = Array.from(dayWiseWage.values()).some(wage => wage === 80);
console.log("Has Part Time Wage:", hasPartTime);

// h. Find the number of days the employee worked (wage > 0)
const workedDays = Array.from(dayWiseWage.values()).filter(wage => wage > 0).length;
console.log("Number of Days Worked:", workedDays);