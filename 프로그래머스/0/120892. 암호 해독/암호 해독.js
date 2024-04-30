function solution(cipher, code) {
    // 암호화된 문자열 cipher의 code의 배수 번째 글자만 진짜 암호
    const answer = [];
    for (let i = 0; i <= cipher.length; i++) {
        if (i % code === 0) {
            answer.push(cipher[i - 1])
        }
    }
    return answer.join('');
}