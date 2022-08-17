const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Hello from express js!");
});

// GET => List
// GET detail => students/2
// POST

app.get('/api/students', (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students);
        });
});

app.post('/api/students', (req, res) => {
    const student = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(student);
            db.insertDbStudent(students)
                .then(data => {
                    res.send(student);
                });
        });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});