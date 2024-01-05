const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let check of str) {
        if(check.charCodeAt() >= 65 && check.charCodeAt() <= 90) {
            answer += check.toLowerCase();
        } else {
            answer += check.toUpperCase();
        }
    }
   console.log(answer);
});