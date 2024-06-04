// In java script , an object is an unordered collection of key value pairs. Each key-value pair is called propety

var Person = {
    firstName : "John",
    lastName : "Doe",
    age : 50
};

console.log(Person)

//Access elements of objects - dot notation
console.log(Person.firstName)

// Bracket notation

console.log(Person["lastName"])

var Captain = {
    firstName : "Joe",
    lastName : "Simon",
    age : 101,
    friends : ["Timely", "Kirby"],
    address: {
        state: "UP",
        city: {
            name: "Noida",
           pinCode: "201304"
        }
    }
}

console.log(Captain.friends[1])
console.log(Captain.address.city.name)

//Update friend array of class Captain
Captain.friends.push("Divya")
console.log(Captain.friends)

//Add new property in the class
Captain.movies = ["Movie1","Movie2","Movie3"]
console.log(Captain)

Captain.isAvenger = false
console.log(Captain)

//delete property
delete Captain.isAvenger
console.log(Captain)









