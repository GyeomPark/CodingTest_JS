function solution(array, height) {
    const arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > height) {
            arr.push(array[i]);
        } 
    }
    return arr.length;
}