function solution(num_str) {
    var answer = 0;
    let parseNum = [];
    parseNum = num_str.split('').map((num) => parseInt(num));
    answer = parseNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return answer;
}