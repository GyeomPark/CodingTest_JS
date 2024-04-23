function solution(my_string, n) {
    // 문자열 내에 각 문자를 n번 반복
    let result = [...my_string].map((v) => v.repeat(n));
    return result.join('');
}