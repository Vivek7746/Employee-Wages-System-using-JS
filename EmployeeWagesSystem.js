// Employee Payroll Data Class
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }
}

// Employee Payroll Data Instances
const employees = [
    new EmployeePayroll(1, "John Doe", 50000, "Male", "2023-01-15"),
    new EmployeePayroll(2, "Jane Smith", 60000, "Female", "2022-06-20"),
    new EmployeePayroll(3, "Alice Johnson", 55000, "Female", "2021-09-10"),
    new EmployeePayroll(4, "Bob Brown", 70000, "Male", "2020-11-05")
];

console.log("Employee Payroll Data:", employees);

// a. Compute total salary using reduce
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary Expense:", totalSalary);

// b. List all employee names
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

// c. Filter employees by gender
const maleEmployees = employees.filter(emp => emp.gender === "Male");
const femaleEmployees = employees.filter(emp => emp.gender === "Female");
console.log("Male Employees:", maleEmployees);
console.log("Female Employees:", femaleEmployees);

// d. Find the first employee who joined before 2022
const firstOldEmployee = employees.find(emp => emp.startDate < new Date("2022-01-01"));
console.log("First Employee Joined Before 2022:", firstOldEmployee);