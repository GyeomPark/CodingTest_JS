function solution(num_list) {
  const odd = [];
  const even = [];
  
  num_list.map((num, i)=> i % 2 === 0 ? odd.push(num) : even.push(num))
  // 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return
  const oddadd = 0;
  const evenadd = 0;

  const oddSum = odd.reduce((acc, cur) => acc + cur, oddadd); 
  const evenSum = even.reduce((acc, cur) => acc + cur, evenadd);
  if (oddSum > evenSum) {
    return oddSum;
  } else {
    return evenSum;
  }
}