let objOne: any = {};
console.log(objOne);

interface CourseInterface{
	name: string;
	time: number;
	free?: boolean;
}

let objTwo: CourseInterface;
objTwo = {
	name: "ES6",
	time: 5.5
};
console.log(objTwo);

let objThree: CourseInterface;
objThree = {
	name: "TypeScript",
	time: 10,
	free: false
};
console.log(objThree);
