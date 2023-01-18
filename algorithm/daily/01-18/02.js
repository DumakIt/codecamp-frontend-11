
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 입출력 예
// s =>	return
// "a234" =>	false
// "1234" =>	true


function solution(s) {

  if (Number(s) || Number(s) === 0) {
      if (s.length === 4 || s.length === 6) {
          return true
      } return false
  } return false

  // 실패했다... 3e10을 받으면 계산식?이라서 Number로 찍으면 30000....이라고 떠서 첫번째 if를 통과한다;;;
  // 이거 풀어 보려다 1시간 초과 ㅠㅜ.. 아직 가야할 길이 너무 멀다..
}


// if (s.length !== 4 && s.length !== 6) {
//   return false
// }
// 
// const answer = s.split("").filter((el) => {
//  return Number.isNaN(Number(el))
// })
// return answer.length === 0


// 알고리즘 시간에 문제풀이
