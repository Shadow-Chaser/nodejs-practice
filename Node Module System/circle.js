const PI = 3.1416;

const area = r => PI * r * r;
const circumference = r => 2 * PI * r;

const message = "Hello, Good People!";

// Exporting this function

module.exports = {
    "area": area,
    "circumference": circumference,
    "msg": message
}

// Alternate approach #1

// module.exports.area = area;
// module.exports.circumference = circumference;
// exports.message = message;

// Alternate approach #1
// module.exports = { area, circumference, message }


console.log("I am from circle.js"); // This will be executed while circle.js import