function showNumberInfo(x: number): number{
    return x;
}

function showStringInfo(x: string): string{
    return x;
}

// generic
function showInfo<T>(x: T): T{
    return x;
}

showInfo<boolean>(true);
showInfo<string>("abc");
showInfo<number>(132);