// my_string에서 s(인덱스) 전까지는 기존 내용대로
// s 인덱스부터는 overwrite_string으로
// overwrite_string의 길이만큼 끝이나면 다시 my_string의 마지막 값..?
function solution(my_string, overwrite_string, s) {
    var answer = '';
    let str = [...my_string];
    
    // splice를 통해 푸는 방법
    str.splice(s, overwrite_string.length, overwrite_string);
    answer = str.join("");
    
    return answer;
}
