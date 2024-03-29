function solution(my_string, index_list) {
    var answer = '';
    answer = [...index_list].map((idx) => my_string[idx]).join("")
    return answer;
}