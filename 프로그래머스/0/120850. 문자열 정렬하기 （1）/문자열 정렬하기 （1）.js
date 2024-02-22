function solution(my_string) {
  const regex = /[^0-9]/g;
  let result = my_string.replace(regex, "").split("").map(Number);
  return result.sort((a, b) => a - b);
}