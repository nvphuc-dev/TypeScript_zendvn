class StudyGeneric{
    static printArray<T>(params: T[]): void{
        console.log(params);
    }
}

StudyGeneric.printArray<number>([1, 2, 3]);
StudyGeneric.printArray<string>(["a", "b", "c"]);
StudyGeneric.printArray<any>(["a", 1, false]);