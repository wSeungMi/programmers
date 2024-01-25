function solution(num_list) {
    var answer = [...num_list];

    let last = answer[answer.length - 1];
    let before = answer[answer.length -2];
    
    if(last > before) {
        answer.push(last - before);
    } else {
        answer.push(last*2);
    }
    
    return answer;
}