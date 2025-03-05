// Employee Payroll Data Class
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        try {
            if (!this.validateId(id)) {
                throw new Error("Invalid ID: ID must be a non-zero positive number.");
            }
            if (!this.validateName(name)) {
                throw new Error("Invalid name format: Name must start with a capital letter and have at least 3 characters.");
            }
            if (!this.validateSalary(salary)) {
                throw new Error("Invalid salary: Salary must be a non-zero positive number.");
            }
            if (!this.validateGender(gender)) {
                throw new Error("Invalid gender: Gender must be 'M' or 'F'.");
            }
            if (!this.validateStartDate(startDate)) {
                throw new Error("Invalid start date: Date cannot be in the future.");
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

    validateId(id) {
        return Number.isInteger(id) && id > 0;
    }

    validateName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        return namePattern.test(name);
    }

    validateSalary(salary) {
        return Number.isFinite(salary) && salary > 0;
    }

    validateGender(gender) {
        return /^(M|F)$/.test(gender);
    }

    validateStartDate(startDate) {
        const date = new Date(startDate);
        return date <= new Date();
    }
}

// Employee Payroll Data Instances with error handling
const employees = [];

try {
    employees.push(new EmployeePayroll(1, "John Doe", 50000, "M", "2023-01-15"));
    employees.push(new EmployeePayroll(2, "Jane Smith", 60000, "F", "2022-06-20"));
    employees.push(new EmployeePayroll(3, "Alice Johnson", 55000, "F", "2021-09-10"));
    employees.push(new EmployeePayroll(4, "Bob Brown", 70000, "M", "2020-11-05"));
    // Example of invalid inputs
    employees.push(new EmployeePayroll(5, "jo", 50000, "M", "2023-01-01")); // Invalid name
    employees.push(new EmployeePayroll(0, "Sam Wilson", 45000, "M", "2023-02-10")); // Invalid ID
    employees.push(new EmployeePayroll(6, "Emma Davis", -5000, "F", "2024-05-15")); // Invalid salary and future date
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
const maleEmployees = employees.filter(emp => emp.gender === "M");
const femaleEmployees = employees.filter(emp => emp.gender === "F");
console.log("Male Employees:", maleEmployees);
console.log("Female Employees:", femaleEmployees);

// d. Find the first employee who joined before 2022
const firstOldEmployee = employees.find(emp => emp.startDate < new Date("2022-01-01"));
console.log("First Employee Joined Before 2022:", firstOldEmployee);