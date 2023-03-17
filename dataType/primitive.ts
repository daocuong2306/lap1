
let a: number | string | boolean = true
var myFunction = function () {
    let name = 'Bap';
    console.log(name); // Todd
};
// Uncaught ReferenceError: name is not defined
console.log(name);
