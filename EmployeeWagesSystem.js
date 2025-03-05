// Employee Payroll Data Class
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        try {
            if (!this.validateName(name)) {
                throw new Error("Invalid name format: Name must start with a capital letter and have at least 3 characters.");
            }
            this.id = id;
            this.name = name;
            this.salary = salary;
            this.gender = gender;
            this.startDate = new Date(startDate);
        } catch (error) {
            console.error(error.message);
        }
    }

    validateName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        return namePattern.test(name);
    }
}

// Employee Payroll Data Instances with error handling
const employees = [];

try {
    employees.push(new EmployeePayroll(1, "John Doe", 50000, "Male", "2023-01-15"));
    employees.push(new EmployeePayroll(2, "Jane Smith", 60000, "Female", "2022-06-20"));
    employees.push(new EmployeePayroll(3, "Alice Johnson", 55000, "Female", "2021-09-10"));
    employees.push(new EmployeePayroll(4, "Bob Brown", 70000, "Male", "2020-11-05"));
    // Example of an invalid name
    employees.push(new EmployeePayroll(5, "jo", 50000, "Male", "2023-01-01"));
} catch (error) {
    console.error(error.message);
}

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