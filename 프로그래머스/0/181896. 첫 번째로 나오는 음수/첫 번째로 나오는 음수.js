function solution(num_list) {
    var answer = 0;
    answer = num_list.findIndex(check => check < 0)
    return answer;
}