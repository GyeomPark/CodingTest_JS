function solution(num_list) {
  let result = 0;
  let even = '';
  let odd = '';
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += String(num_list[i])
    } else {
      odd += String(num_list[i])
    }
    result = +even + +odd;
  }
  return result;
}