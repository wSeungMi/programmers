function solution(rny_string) {
    var answer = '';
    answer = rny_string.split(",").map((str) => str.replace(/m/g, 'rn')).join("")
    return answer;
}