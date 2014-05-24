define([], function () {
    var testFixtureTreeNode = function (testFixtureName)
    {
        this.testFixtureName = testFixtureName;
        this.tests = ko.observableArray([]);

        this.passedCount = 0;
        this.failedCount = 0;


    };

    return testFixtureTreeNode;
});