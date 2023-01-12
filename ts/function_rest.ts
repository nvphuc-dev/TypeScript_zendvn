function showStudentInfo(name: string, ...course: string[]): string{
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("Kenvin", "ES6", "PHP", "TypeScript"));