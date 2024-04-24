function solution(rsp) {
    // 가위는 2 바위는 0 보는 5
    // rsp에 저장된 가위바위보를 모두 이기는 경우를 순서대로 나타낸 문자열
    let string = '';
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            string += '0';
        } else if (rsp[i] === '0') {
            string += '5';
        } else if (rsp[i] === '5') {
            string += '2';
        }
    }
    return string;
}