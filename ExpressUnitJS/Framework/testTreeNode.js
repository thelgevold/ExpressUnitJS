define([], function () {
    var testTreeNode = function (name,passed,message) {
        this.name = name;
        this.passed = passed;
        this.message = message;

        this.icon = "glyphicon glyphicon-thumbs-down";
        this.css = "testFailed";

        if (this.passed === true) {
            this.icon = "glyphicon glyphicon-thumbs-up";
            this.css = "testPassed";
        }
    };

    testTreeNode.prototype.testClick = function () {
        window.testContext.testMessage(this.message);
    };

    return testTreeNode;
});