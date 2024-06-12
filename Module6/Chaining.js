

let arr = [
    {name: "A", age: 10 , gender:"M"},
    {name: "B", age: 20 , gender:"M"},
    {name: "C", age: 30 , gender:"F"},
    {name: "D", age: 50 , gender:"F"}
];

// Age of all Men

let males = arr.filter(function(obj){
    return obj.gender == 'M'
})

console.log(males);

//find ages
let ageOfMales = males.map(function(male){
    return male.age
});

console.log(ageOfMales);

//Chaining
let malesChaining = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
});

console.log(malesChaining);

/*
From the transations array filter out positive Element and Calculate the amount 
Use filter and Reduce to Achive this.
*/


const transactions = [1000,2000,3000,4000,-898, 3800, -4500];