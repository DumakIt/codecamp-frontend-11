// [카카오 인턴] 키패드 누르기

// 문제 설명
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

// 입출력 예
// numbers, hand => result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],	"right" => "LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],	"left" => "LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],	"right" => "LLRLLRLLRL"

// 입출력 예에 대한 설명

// 입출력 예 #1
// 순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

// 왼손 위치  오른손 위치  눌러야 할 숫자  사용한 손  설명
// *  #  1  L  1은 왼손으로 누릅니다.
// 1  #  3  R  3은 오른손으로 누릅니다.
// 1  3  4  L  4는 왼손으로 누릅니다.
// 4  3  5  L  왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5  3  8  L  왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
// 8  3  2  R  왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
// 8  2  1  L  1은 왼손으로 누릅니다.
// 1  2  4  L  4는 왼손으로 누릅니다.
// 4  2  5  R  왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
// 4  5  9  R  9는 오른손으로 누릅니다.
// 4  9  5  L  왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	9  -	-

// 따라서 "LRLLLRLLRRL"를 return 합니다.

// 입출력 예 #2
// 왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

// 입출력 예 #3
// 오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.

// function solution(numbers, hand) {
//   let answer = "";
//   let arr = [
//     [1, 4, 7, "*"],
//     [2, 5, 8, 0],
//     [3, 6, 9, "#"],
//   ];

//   let LH = "*";
//   let RH = "#";

//   for (let i = 0; i < numbers.length; i++) {
//     if (arr[0].includes(numbers[i])) {
//       LH = numbers[i];
//       answer += "L";
//       continue;
//     }
//     if (arr[2].includes(numbers[i])) {
//       RH = numbers[i];
//       answer += "R";
//       continue;
//     }
//     let LHIdx = arr[0].indexOf(LH);
//     if (LHIdx === -1) LHIdx = arr[1].indexOf(LH);

//     let RHIdx = arr[2].indexOf(RH);
//     if (RHIdx === -1) RHIdx = arr[1].indexOf(RH);

//     const numbersIdx = arr[1].indexOf(numbers[i]);

//     if (Math.abs(numbersIdx - LHIdx) < Math.abs(numbersIdx - RHIdx)) {
//       LH = numbers[i];
//       answer += "L";
//       continue;
//     }

//     if (LHIdx - numbersIdx === RHIdx - numbersIdx) {
//       if (hand === "left") {
//         LH = numbers[i];
//         answer += "L";
//         continue;
//       } else {
//         RH = numbers[i];
//         answer += "R";
//         continue;
//       }
//     } else {
//       RH = numbers[i];
//       answer += "R";
//     }
//   }

//   return answer;
// }

// 다풀지 못했다... 오른손이 2, 왼손이 4, 주어진 숫자가 5이라면 오른손 왼손 둘다 이동거리가 같다
// 인덱스 값으로 구별하려다 보니 이동거리에 차이가 생겨서 해결하려다 실패..

//-----------------------------------------------------

// const leftNumbers = [1, 4, 7];
// const rightNumbers = [3, 6, 9];

// function solution(numbers, hand) {
//   let answer = "";

//   const current = {
//     left: 10,
//     right: 12,
//   };

//   for (let i = 0; i < numbers.length; i++) {
//     if (leftNumbers.includes(numbers[i])) {
//       answer += "L";
//       current["left"] = numbers[i];
//     } else if (rightNumbers.includes(numbers[i])) {
//       answer += "R";
//       current["right"] = numbers[i];
//     } else {
//       const centerObj = { ...current };

//       for (let hand in centerObj) {
//         numbers[i] = numbers[i] === 0 ? 11 : numbers[i];

//         let location = Math.abs(numbers[i] - centerObj[hand]);

//         if (location >= 3) {
//           location = Math.trunc(location / 3) + (location % 3);
//         }
//         centerObj[hand] = location;
//       }

//       if (centerObj["left"] === centerObj["right"]) {
//         answer += hand === "left" ? "L" : "R";
//         current[hand] = numbers[i];
//       } else {
//         if (centerObj["left"] > centerObj["right"]) {
//           answer += "R";
//           current["right"] = numbers[i];
//         } else {
//           answer += "L";
//           current["left"] = numbers[i];
//         }
//       }
//     }
//   }
//   return answer;
// }

// const [leftNumbers, rightNumbers] = [
//   [1, 4, 7],
//   [3, 6, 9],
// ];

// function solution(numbers, hand) {
//   const current = {
//     left: 10,
//     right: 12,
//   };

//   return numbers.reduce((acc, cur) => {
//     let [useFinger, target] = ["", ""];

//     if (leftNumbers.includes(cur)) {
//       [useFinger, target] = ["L", "left"];
//     } else if (rightNumbers.includes(cur)) {
//       [useFinger, target] = ["R", "right"];
//     } else {
//       const fingers = Object.entries(current).reduce((acc2, cur2) => {
//         cur = cur === 0 ? 11 : cur;
//         let location = Math.abs(cur - cur2[1]);

//         if (location > 2) {
//           location = Math.trunc(location / 3) + (location % 3);
//         }

//         acc2[cur2[0]] = location;
//         return acc2;
//       }, {});

//       if (fingers["left"] === fingers["right"]) {
//         [useFinger, target] = [hand === "right" ? "R" : "L", hand];
//       } else if (fingers["left"] > fingers["right"]) {
//         [useFinger, target] = ["R", "right"];
//       } else {
//         [useFinger, target] = ["L", "left"];
//       }
//     }

//     current[target] = cur;
//     return acc + useFinger;
//   }, "");
// }

// 알고리즘 시간에 문제풀이
