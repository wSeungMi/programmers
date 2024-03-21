function solution(my_string, alp) {
    var answer = '';
    answer =  my_string.toLowerCase().replaceAll(alp, alp.toUpperCase())
    return answer;
}