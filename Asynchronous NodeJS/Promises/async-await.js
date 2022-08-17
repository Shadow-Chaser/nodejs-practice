// Promises
console.log("Line 1");

// getStudent(3)
//     .then(student => getCourses(student))
//     .then(courses => getQuizMarks(courses.courses))
//     .then(marks => console.log(marks))
//     .catch(err => console.log(err));

// Async and Await
async function studentData() {
    try {
        const student = await getStudent(3);
        const courses = await getCourses(student);
        const marks = await getQuizMarks(courses.courses);
        console.log(marks);
    } catch (err) {
        console.log(err);
    }
}

studentData();

console.log("Line 2");

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching From Database...");
            const student = { id: id, name: "Rahim" };
            console.log(student)
            resolve(student);
        }, 2000);
    });
}

function getCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student Courses from Database...");
            const courses = { id: student.id, name: student.name, courses: ["JavaScript", "Python"] };
            //console.log(courses);
            //resolve(courses);
            reject("Error Occured!");
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