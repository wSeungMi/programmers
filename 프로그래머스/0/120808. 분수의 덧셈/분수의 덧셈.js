function fnGCD(a, b) {
    return (a%b) ? fnGCD(b, a%b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    // 분자
    let numer = numer1 * denom2 + numer2 * denom1
    
    // 분모
    let denom = denom1 * denom2;
    
    // 최대공약수
    let gcd = fnGCD(denom, numer);
    
    return [numer/gcd, denom/gcd];
}