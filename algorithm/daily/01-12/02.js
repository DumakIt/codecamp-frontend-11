// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.
// str은 문자열입니다.
// 대문자 "A" 문자열도 "a" 에 포함입니다.
// for을 이용해서 문제를 풀어야 합니다.

function countLetter(str) {
	let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === "a" || str[i] === "A") {
      count++
    }
  return count
}