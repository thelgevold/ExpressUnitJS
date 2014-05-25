define([], function () {
    var test = function (name, testMethod)
    {
        this.name = name;
        this.testMethod = testMethod;

        this.asynchLoading = function () { return true};
    };

    return test;
});