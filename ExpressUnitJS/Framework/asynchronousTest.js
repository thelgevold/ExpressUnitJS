define([], function () {
    var asynchTest = function (name, asynchLoading, testMethod) {
        this.name = name;
        this.asynchLoading = asynchLoading;

        this.testMethod = testMethod;
    };

    return asynchTest;
});