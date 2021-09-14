let student = {firstName: 'Petr', lastName: 'Perviy'};

let student1 = {firstName: 'Marin', lastName: 'Krakova'};
  
let student2 = {firstName: 'Paul', lastName: 'George'};
student.firstName = 'Petya'
delete student.lastName

let group = []
if (student.lastName === undefined){
  student.lastName = ""
}
group.push(`${student.firstName +""+ student.lastName}, ${student1.firstName +" "+ student1.lastName}, ${student2.firstName +" "+ student2.lastName}`)

console.log(group)
