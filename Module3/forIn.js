var colors = {
primary : "Blue",
secondary: "Red",
tertiary : "White"
}

for(var color in colors) {
    console.log(color + "-> " +colors[color])
}

//for in for for loop

var arr = [1,2,3,4,5,6,7,8,9]
var i = 0
for(i in arr) {
    console.log("arr[i] =", arr[i])
    console.log("i =", i)
}

