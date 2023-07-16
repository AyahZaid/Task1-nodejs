const fs =require ("fs")

let user1={
    fname:"ahmed",
    lname:"hossam",
    age:20,
    city:"Alex"
}
const userJson=JSON.stringify(user1)
fs.writeFileSync("userData.json",userJson)
console.log(fs.readFileSync("userData.json"));
let userObj=JSON.parse(userJson)
 userObj={
    fname:"adel",
    lname:"mohammed",
    age:40,
    city:"cairo"
}
const userJson2=JSON.stringify(userObj)
fs.writeFileSync("userData.json",userJson2)
console.log(fs.readFileSync("userData.json"));