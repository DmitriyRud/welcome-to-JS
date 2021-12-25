let student = {};

student["firstName"] = "Petr";
student["lastName"] = "Perviy";

console.log("Step 1.", student);

student["firstName"] = "Petya";

console.log("Step 2.", student);

delete student.firstName;

console.log("Step 3.", student);

let group = [];
group.push(student);

console.log("Array group :", group);

let student2 = { firstName: "Ivan", lastName: "Ivanov" };
group.push(student2);
group.push({ firstName: "Petr", lastName: "Petrov" });

console.log("Array group modified:", group);