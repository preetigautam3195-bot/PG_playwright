
let arr = [60, 50, 89];
// JSON -> java script object notation , json is all about -> key and value
//key and value comes under {} -> and we called curly brackets , an object.
// and we use [], so we called square brackets, an array.
// json is combination of objects and arrays

// ## i have to create my resume in json format

let allStudentMarks = [
    {
        "name" : "preeti",
        "rollNumber" : 56,
        "city" : "mumbai",
        "contact" : [
            {
                "contact-type" : "mobile",
                "contact-info" : "9351591383",
            },
            {
                "contact-type" : "email",
                "contact-info" : "preetigautam3195@gmail.com",
            }
        ],
        "marks" : {
            "maths" : 60,
            "art" : 50,
            "science" : 89, 
        }
    },
]

let marks1 = {
    "maths" : 60,
    "art" : 50,
    "science" : 89,

}
console.log(allStudentMarks);