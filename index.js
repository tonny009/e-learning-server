const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;

const courses = require('./Data/categories.json')

app.get('/', (req, res) => {
    res.send("Assignment API Running")
})

app.get('/new-courses', (req, res) => {
    res.send(courses)
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.filter(c => c.id === id);
    res.send(selectCourse)
})

app.listen(port, () => {
    console.log("Server is running", port)
})
