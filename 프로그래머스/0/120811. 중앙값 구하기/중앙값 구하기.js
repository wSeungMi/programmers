function solution(array) {
    var answer = 0;
    // 중간 index 구하기
    let num = Math.floor(array.length/2);
    answer = array.sort((a,b) => a-b);
    return answer[num];
}