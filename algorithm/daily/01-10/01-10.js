01

var name1 = "MinKi"
let name2 = "MinKi"
const name3 = "MinKi"

02

name1 = "철수"
name2 = "철수"
//const는 재할당 불가

03

name1 = "철수"
name2 = "철수"
//const는 재할당 불가

04

let fruits = ['사과', '바나나', '파인애플']
let newFruits = []

fruits.length
newFruits.push(fruits[2])

//length를 사용하는 이유는 length - 1 을 하면 배열의 가장 마지막 인덱스라서

05

let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = []

NewArr = students.slice(0, 3)

06

let fruits1 = ["사과", "바나나"]
fruits1 = ["맛있는" + fruits1[0], "맛있는" + fruits1[1]]

07

const number = "01012345678"
let arr = []

arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7))

08

const student = {}
student.name = "철수"

09

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school

10

let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink

11

const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교"

13

let str = "3"
let number1 = 3


typeof str
typeof number1

// ""를 사용하면 문자열 그냥 숫자만 입력시 숫자열이다

14

let array = []
let object = {}


typeof array
typeof object
Array.isArray(array)
Array.isArray(object)

//객체와 배열 둘다 object 타입 으로 나오지만 isArray에서는 object는 배열이 아니기 때문에 false

15

let num = 24
let str1 = String(num)

16

1 + "1"  //'11'

1 - "1"  //0

"1" + "1"  //"11"

1 * "1"  //1

3 * "A"  //NaN

1 + 1 + '1'  //'21'

'1' + 1 + 1  //'12'

"11" - 1   //'111'

"11" + 1   //'10'

"홍" + "길동"  //'홍길동'

20 === "20"  //false

20 == "20"  //true

!true  //false

17

(20 >= 10) && (20 === 10)   //false

(20 === 10) || (10 === 10)  //true