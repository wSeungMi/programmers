function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if(ineq === '>' && eq === '=') {
        return answer = n >= m ? 1 : 0; 
    } else if (ineq === '>' && eq === '!') {
        return answer = n > m ? 1: 0;
    } else if (ineq === '<' && eq === '=') {
        return asnwer = n <= m ? 1: 0;
    } else if (ineq === '<' && eq === '!') {
        return answer = n < m ? 1: 0;
    } else {
        return 0;
    }
}