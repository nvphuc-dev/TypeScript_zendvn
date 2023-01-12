function funcAbc(x) {
    if (typeof x == "string") {
        return 100;
    }
    else if (typeof x == "number") {
        return "abc";
    }
    else {
        return true;
    }
}
console.log(funcAbc(true));
