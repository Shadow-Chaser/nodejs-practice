const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

app.use(express.json()); // POST/PUT/PATCH -> json object -> req.body
app.use((req, res, next) => {
    console.log("I am middleware 1!");
    next();
});

app.use((req, res, next) => {
    console.log("I am middleware 2!");
    next();
});

app.use('/api/students', studentRouter);

app.get('/', (req, res, next) => {
    //res.send("Another Response!");
    next();
});

app.get('/', (request, response) => {
    console.log("I am get Request Middleware!");
    response.send("Hello from express js!");
});



const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});