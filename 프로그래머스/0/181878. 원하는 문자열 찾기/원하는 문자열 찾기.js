function solution(myString, pat) {
    var answer = 0;
    let isInclude;
    isInclude = myString.toLowerCase().includes(pat.toLowerCase());
    if(isInclude) {
     answer = 1
    } else {
     answer = 0
    }
    return answer;
}