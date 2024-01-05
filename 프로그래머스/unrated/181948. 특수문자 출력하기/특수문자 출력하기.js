// 주어진 출력 예시에서 출력이 되지 않는 문자열부터 찾자.
// ""는 ''로 감싸서 처리했는데.. *이랑 (\'"') 이부분이 문제
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
   console.log('!@#$%^&\*' + '(\\\'\"<>?:;')
});