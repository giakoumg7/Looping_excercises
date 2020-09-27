const studentsMarks = [80,77,88,95,68]
let average;
let sum = 0;
for (let i=0; i<studentsMarks.length; i++) {
    sum += studentsMarks[i]
}
average = sum / studentsMarks.length;
console.log("Average Score = " + average)
if (average <100 && average>=90) {
    console.log("The Average Grade of All students is  A")
}else if (average <90 && average>=80){
    console.log("The Average Grade of All students is  B")
}else if(average <80 && average>=70){
    console.log("The Average Grade of All students is  C")
}else if(average <70 && average>=60){
    console.log("The Average Grade of All students is  D")
}else {
    console.log("The Average Grade of All students is  F")
}
