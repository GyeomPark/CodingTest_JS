function solution(n) {
    // n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 함
    let piece = 6;
    
    while (true) {
        if (piece % n === 0) {
            break;
        }
        piece += 6;
    }
    return piece / 6;
}