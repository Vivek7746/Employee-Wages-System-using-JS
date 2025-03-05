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

// a. Calculate total wage using reduce method
const totalWage = dailyWages.reduce((total, day) => total + day.wage, 0);
console.log("Total Wage:", totalWage);

// b. Show the Day along with Daily Wage using map function
const dailyWageWithDay = dailyWages.map(day => `Day ${day.day}: $${day.wage}`);
console.log("Daily Wages:", dailyWageWithDay);

// c. Show Days when Full time wage (160) was earned using filter function
const fullTimeDays = dailyWages.filter(day => day.wage === 160).map(day => day.day);
console.log("Days with Full Time Wage:", fullTimeDays);

// d. Find the first occurrence when Full Time Wage (160) was earned using find function
const firstFullTimeDay = dailyWages.find(day => day.wage === 160);
console.log("First Full Time Wage Day:", firstFullTimeDay);

// e. Check if every element of full time wage is truly holding Full Time Wage (160)
const allFullTime = dailyWages.every(day => day.wage === 160);
console.log("Every day is Full Time Wage:", allFullTime);

// f. Check if there is any Part Time Wage (80)
const hasPartTime = dailyWages.some(day => day.wage === 80);
console.log("Has Part Time Wage:", hasPartTime);

// g. Find the number of days the employee worked (wage > 0)
const workedDays = dailyWages.filter(day => day.wage > 0).length;
console.log("Number of Days Worked:", workedDays);