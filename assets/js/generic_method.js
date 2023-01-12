var StudyGeneric = (function () {
    function StudyGeneric() {
    }
    StudyGeneric.printArray = function (params) {
        console.log(params);
    };
    return StudyGeneric;
}());
StudyGeneric.printArray([1, 2, 3]);
StudyGeneric.printArray(["a", "b", "c"]);
StudyGeneric.printArray(["a", 1, false]);
