const fs = require('fs');

fs.readFile("./files/input.txt", "utf-8", (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
        fs.writeFile("./files/output.txt", res, "utf-8", (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
})