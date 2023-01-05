const figlet = require('figlet');
const color = require('colors');


figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});
//takes string and generates block charaters as data