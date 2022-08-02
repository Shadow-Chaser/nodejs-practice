const fs = require('fs');

let text = fs.readFileSync("./files/input.txt", "utf-8");

console.log(text);

text = `Text from input.txt: ${text}`;

fs.writeFileSync("./files/output.txt", text); // If the file already exists then it will override the text, else create the file 