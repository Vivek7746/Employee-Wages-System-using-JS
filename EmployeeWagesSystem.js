const isAbsent = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == isAbsent) {
    console.log("Employee is Absent");
    return;
}
else {
    console.log("Employee is Present");
}