const { error } = require("console");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
// declare the variables to store the text of the files
let firstname, lastname, age, hobbies

// read the information of the file
fs.readFile("firstname.txt","utf-8").then(data =>{
    // store the data in the var
    firstname = data

    // read the information of the file
    return fs.readFile('lastname.txt', "utf-8")

    .then(data => {

        // store the data in the var
        lastname = data

        // read the information of the file
        return fs.readFile('age.txt','utf-8')
    })
    .then(data => {

        // store the data in the var
        age = data

        // read the information of the file
        return fs.readFile('hobbies.txt','utf-8')
    })
    .then(data =>{

        // store the information in the var
        hobbies = data

        // convert the string in a list
        hobbies = JSON.parse(hobbies)

        // final ouput
        console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
    })
    // display if we have an error
    .catch(err =>{
        console.log(err)
    })
})


// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function info() {
    // try to get all the promises 
    try{
        // store the information inthe variables
        const fName = await fs.readFile("firstname.txt","utf-8")
        const lName = await fs.readFile("lastname.txt", "utf-8")
        const agePerson = await fs.readFile("age.txt","utf-8")
        const hobiesText = await fs.readFile("hobbies.txt","utf-8")
        const hobiesArr = JSON.parse(hobiesText)
        console.log(`${fName} ${lName} is ${agePerson} years old and his hobbies are ${hobiesArr[0]} and ${hobiesArr[1]}`)
    }
    // if something whent wrong we can catch that error
    catch(error){
        console.error(error)
    }
}

// call the function 
info()