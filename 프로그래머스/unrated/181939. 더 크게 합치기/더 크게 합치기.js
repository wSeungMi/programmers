function solution(a, b) {
    var answer = 0;
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);
    
    ab > ba || ab === ba ? answer = Number(ab) : answer = Number(ba);

    return answer;
}