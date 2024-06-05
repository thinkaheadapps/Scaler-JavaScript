

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
