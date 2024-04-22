function solution(numer1, denom1, numer2, denom2) {
    // 두 분수를 더한 값을 기약 분수
    // 분자와 분모를 순서대로 담은 배열 리턴
    // 공통분모를 맞춰줘야 함
    // 1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    // 2. 분자와 분모의 최대 공약수를 구하여 값을 구한다.
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;
    
    return [numerator, denominator];
}