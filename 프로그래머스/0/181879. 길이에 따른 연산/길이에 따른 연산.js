function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let mul = 1;
    if(num_list.length >= 11) {
        for(let num of num_list) {
            sum += num;
            answer = sum;
        } 
    } else  {
        for(let num of num_list) {
            mul *= num;
            answer = mul;
        }
    }
    return answer;
}