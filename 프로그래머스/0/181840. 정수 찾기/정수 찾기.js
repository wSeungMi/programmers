function solution(num_list, n) {
    var answer = 0;
    const isCheckedNum = num_list.includes(n);
    return isCheckedNum ?  answer = 1 : answer = 0;
}