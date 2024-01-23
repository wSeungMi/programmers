function solution(num_list) {
    var answer = 0;
    let mul = 1;
    let sum = 0;
    
    for(let list of num_list) {
        mul *= list;
        sum += list;      
    }
    
    if (mul < (sum**2)) {
        answer = 1
    } else {
        answer = 0
    }

    return answer;
}