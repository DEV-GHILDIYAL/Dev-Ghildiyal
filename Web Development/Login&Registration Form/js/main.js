var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

console.log("JavaScript Added");

function register() {
    console.log("Register");
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '100px';
}

function login() {
    console.log("Register");
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}