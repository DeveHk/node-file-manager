const math=require('./module1.js')
const colors=require('./req_dir')
const giveMeAJoke = require('give-me-a-joke')
giveMeAJoke.getRandomDadJoke (function(joke) {
     console.log(joke);
});//its an async function, need callback
console.log(colors)
console.log(math)

const color=require('colors')
console.log('hello'.green);
console.log('inverse the color'.inverse.green.underline);
console.log(color);


const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "T "
}));