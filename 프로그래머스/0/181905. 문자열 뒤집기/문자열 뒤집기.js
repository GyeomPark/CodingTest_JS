function solution(my_string, s, e) {
  let arr = my_string.split('');
  let part = arr.splice(s, e-s+1);
  part = part.reverse();
  arr.splice(s, 0, ...part);

  return arr.join('');
}