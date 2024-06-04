/*
90 to 100 - A
70 to 89 - B
50 - 69 - C
Lower than 50 - F
*/

var studentScore = 50
if(studentScore > 90) {
    console.log("Grade: A")
} else if(studentScore> 70 && studentScore < 89) {
console.log("Grade: B")
} else if(studentScore > 50 && studentScore < 69) {
console.log("Grade : C")
} else {
    console.log("Fail")
}