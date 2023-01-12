// let courses: string[] = ["ES6", "TypeScript"];
// console.log(courses);

interface CourseList{
	[index: number]: string;
}
let courses: CourseList = ["ES6", "TypeScript"];
console.log(courses);