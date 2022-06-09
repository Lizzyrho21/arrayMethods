// make a classroom ?
'use strict';

// we are going to need a classroom
let classroom = []

// we are going to need students
let students = ["Tyler","Zion","Michael","Storm","Lindsey","Jordan","Curtrick",'lizzy']

// this function takes a studentsArray and a classroomArray as parameters
function addStudentsToClassroom(studentsArray,classroomArray){

    // each student should have a way to greet
    const greeting = 'Good morning, everyone, my name is '

    // iterate over the students array 
    for (let index = 0; index < studentsArray.length; index++) {
        const student = studentsArray[index]

       // check if lizzy's name is in the student's array
       if(student.toLowerCase()== 'lizzy'){

           //if so pop her name out
           studentsArray.pop(student)

       }else{

           // then push every other name to the classroom array
           classroomArray.push(student)

           // concat the student's name to the greeting
           console.log(greeting+classroomArray[index])
       }
        
    }
    // return the classroom
    return classroomArray
}

//call the function and pass the array called students and the array called classroom as arguments to the function
addStudentsToClassroom(students,classroom)


