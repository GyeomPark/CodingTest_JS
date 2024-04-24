function solution(hp) {
    // 장군개미 5, 병정개미 3, 일개미 1
    // 사냥감의 체력에 딱 맞게 최소한의 병력
    return parseInt(parseInt(hp / 5) + ((hp % 5) / 3) + (((hp % 5) % 3) / 1));
}