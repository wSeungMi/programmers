function solution(num_list) {
    var answer = [];
    const sorting = num_list.sort((a, b) => a - b);
    answer = sorting.splice(0, 5);
    return answer;
}