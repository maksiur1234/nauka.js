const users = [
    {
        name : "piotr", age : 27, 
    },
    {
        name : "beata", age : 50
    },
    {
        name : "natka", age : 11
    },
    {
        name : "sławek", age : 53
    },
    {
        name : "maksymilian", age : 19
    },
    {
        name : "piotr", age : 37,
    },
    {
        name : "beata", age : 60
    },
    {
        name : "natka", age : 21
    },
    {
        name : "sławek", age : 63
    },
    {
        name : "maksymilian", age : 29
    },
];

users.map(function (user) {
    return {name: user.name, age: user.age*2}
}).forEach(displayUser);
//users.filter(function(dupa){
//    return dupa.age>20
//
//}).forEach(function(user) {
//    console.log(user)
//})

function displayUser(user) {
    console.log(user);
}
