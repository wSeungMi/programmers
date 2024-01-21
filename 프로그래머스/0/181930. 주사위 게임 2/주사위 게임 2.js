function solution(a, b, c) {
    let calc1 = a + b + c;
    let calc2 = (a + b + c) * (a**2 + b**2 + c**2);
    let calc3 = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    var answer = 0;
    if(a === b && b === c && c === a) {
        answer = calc3;
        
    } else if (a !== b && b !== c && c !== a) {
         answer = calc1;
    } else {
         answer = calc2;
    }
    return answer;
}