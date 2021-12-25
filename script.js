let student = {};

student["firstName"] = "Petr";
student["lastName"] = "Perviy";

console.log("Step 1.", student);

student["firstName"] = "Petya";

console.log("Step 2.", student);

delete student.firstName;

console.log("Step 3.", student);