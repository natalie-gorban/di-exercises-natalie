//---------------------
//Copy objects
//--------------------------
let characters = {
	name: 'Hermione Granger',
	house: 'Gryfindor'
};
let person = { ...characters};
// console.log(person)
// person["house"] = "Meet in place"
// console.log("person house = ", person["house"], "characters house", characters["house"]) //unchanged
let characters = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friend :  {
		name : 'Harry Potter',
	}
};
let person = {...characters};
console.log(person)
person["friend"]["name"] = "Hagrid"
console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //changed
//Solution
let person = {
	...characters,
	friend :{
		...characters.friend
	}
};
console.log(person)
person["friend"]["name"] = "Hagrid"
console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //unchanged
white_check_mark
eyes
raised_hands





const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};


// Copy the object into another one (1 spread opeator)
// To allow copying the nested object, use 2 spread operator
// Create a new object that is equal to the student object, with another property called goodstudent = true



 // 1: Copy the object into another one (1 spread opeator)
            // 2: To allow copying the nested object, use 2 spread operator
            // 3: Create a new object that is equal to the student object, with another property called goodstudent = true
            ​
            // 1
            const studentCopy = { ...student }
​
            // 2
            const studentCopy2 = { ...student, scores: { ...student.scores } }
​
            // 3
            const studentCopy3 = {
                ...student,
                scores: { ...student.scores },
                goodstudent: true,
            }
​
            student.scores.maths = 30
            console.log(student, studentCopy, studentCopy2, studentCopy3)
​
            // difference between studentCopy and studentCopy2 is that if you try to change the value of a score in student, that value will be updated in studentCopy, but it won't be updated in studentCopy2.
            // same for studentCopy3 btw.