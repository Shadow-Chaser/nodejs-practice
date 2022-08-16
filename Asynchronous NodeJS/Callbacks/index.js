
const getUser = (id) => {
    setTimeout(() => {
        console.log("data fetching user");
        return {
            id: id,
            name: "AShab"
        }
    }, 3000);
}

console.log("line 1");
const user = getUser(101);
console.log(user);

console.log("line 2");



// using callback function to handle asynchronous


const getUserUsingCallback = (id, cb) => {
    setTimeout(() => {
        console.log("data fetching user..");
        cb({ id: id, name: "AShab" });
    }, 3000);
}

console.log("line 1");
const userUsingCallback = getUserUsingCallback(101, (user) => {
    console.log(user);
});


console.log("line 2");


