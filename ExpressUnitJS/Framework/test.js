define([], function () {
    var test = function (name, testMethod)
    {
        this.name = name;
        this.testMethod = testMethod;
    };

    return test;
});