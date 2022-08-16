/*
Named Functions: In JavaScript, named functions are simply a way of referring 
to a function that employs the function keyword followed by a name that can be
used as a callback to that function. Normal functions with a name or identifier 
are known as named functions.
*/


// Callback Function
console.log("Line 1");

getStudent(2, showStudent);

console.log("Line 2");

function showMarks(marks) {
    console.log(marks);
}

function showCourses(courses) {
    console.log(courses);
    getQuizMarks(courses.courses, showMarks);
}

function showStudent(student) {
    console.log(student);
    getCourses(student, showCourses);
}

function getStudent(id, cb) {
    setTimeout(() => {
        console.log("Fetching From Database...");
        cb({ id: id, name: "Rahim" });
    }, 2000);
}

function getCourses(student, cb) {
    setTimeout(() => {
        console.log("Student Courses from Database...");
        cb({ id: student.id, name: student.name, courses: ["JavaScript", "Python"] })
    }, 1500);
}

function getQuizMarks(courses, cb) {
    setTimeout(() => {
        console.log("Marks.....");
        cb({ [courses[0]]: 5, [courses[1]]: 3 })
    }, 3000)
}