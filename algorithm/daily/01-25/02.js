// 문제 설명

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건

// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예

// arr =>	return
// [4,3,2,1] =>	[4,3,2]
// [10] => [-1]

function solution(arr) {
  var answer = 0;
  answer = arr.indexOf(Math.min(...arr));
  if (arr.length > 1) {
    arr.splice(answer, answer);
  } else {
    return [-1];
  }
  return arr;
}
// 문제풀기 실패;;;

// const answer = [];
// let min = 0;
// // 1. 제일 작은 수를 찾는 for문
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min) answer.push(arr[i]);
//   }
//   return answer.length !== 0 ? answer : [-1]
// }

// const min = Math.min(...arr);
// const answer = arr.filter((num) => num !== min);
// return answer.length === 0 ? [-1] : answer;

// 알고리즘 시간에 문제풀이
