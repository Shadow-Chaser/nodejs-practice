// Promises
console.log("Line 1");

getStudent(3)
    .then(student => {
        console.log(student);
        return getCourses(student);
    })
    .then(courses => {
        console.log(courses);
        return getQuizMarks(courses.courses);
    })
    .then(marks => console.log(marks));

console.log("Line 2");

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching From Database...");
            resolve({ id: id, name: "Rahim" });
        }, 2000);
    });
}

function getCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student Courses from Database...");
            resolve({ id: student.id, name: student.name, courses: ["JavaScript", "Python"] })
        }, 1500);
    })
}

function getQuizMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Marks.....");
            resolve({ [courses[0]]: 5, [courses[1]]: 3 })
        }, 3000)
    })
}