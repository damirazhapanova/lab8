let lab1=[5, 5, 5, 5, 5, 0, 0, 0];
let lab2 = [5, 5, 5, 5, 5, 5, 5, 5];
let lab3 = [5, 5, 5, 5, 5, 5, 5, 5];
let lab4 = [10];
let lab5 = [10, 10, 10, 10, 5, 5, 5, 5, 5, 4];
let lab6 = [10, 10, 5, 5, 5, 4];
let quiz1 = [30];
let sum1 = lab1[0]+lab1[1]+lab1[2]+lab1[3]+lab1[4]+lab1[5]+lab1[6]+lab1[7];
let sum2 = lab2[0]+lab2[1]+lab2[2]+lab2[3]+lab2[4]+lab2[5]+lab2[6]+lab2[7];
let sum3 = lab3[0]+lab3[1]+lab3[2]+lab3[3]+lab3[4]+lab3[5]+lab3[6]+lab3[7];
let sum4 = lab4[0];
let sum5 = lab5[0]+lab5[1]+lab5[2]+lab5[3]+lab5[4]+lab5[5]+lab5[6]+lab5[7]+lab5[8]+lab5[9];
let sum6 = lab6[0]+lab6[1]+lab6[2]+lab6[3]+lab6[4]+lab6[5];
let sum7 = quiz1[0];
let sums =[sum1, sum2, sum3, sum4, sum5, sum6, sum7]
let total_score = (sum1+sum2+sum3+sum4+sum5+sum6)*0.6+sum7*0.4

const results = {
	lab1:[5, 5, 5, 5, 5, 0, 0, 0],
	lab2:[5, 5, 5, 5, 5, 5, 5, 5],
	lab3:[5, 5, 5, 5, 5, 5, 5, 5],
	lab4:[10],
	lab5:[10, 10, 10, 10, 5, 5, 5, 5, 5, 4],
	lab6:[10, 10, 5, 5, 5, 4],
	quiz1:[30],
	sums: (sum1, sum2, sum3, sum4, sum5, sum6, sum7),
	total_score: total_score
}
console.log (results)
