define([], function () {
    var testTreeNode = function (name,passed,message) {
        this.name = name;
        this.passed = passed;
        this.message = message;

        this.icon = "glyphicon glyphicon-thumbs-down";
        this.css = ko.observable("testFailed");

        if (this.passed === true) {
            this.icon = "glyphicon glyphicon-thumbs-up";
            this.css("testPassed");
        }
    };

    testTreeNode.prototype.testClick = function () {

        window.testContext.testPassedMessage(null);
        window.testContext.testFailedMessage(null);

        if (this.passed === true) {
            window.testContext.testPassedMessage(this.message);
        }
        else {
            window.testContext.testFailedMessage(this.message);
        }
        
        window.testContext.clearSelectedNodes();

        if (this.passed === true) {
            this.css("testSelected testPassed");
        }
        else {
            this.css("testSelected testFailed");
        }
    };

    return testTreeNode;
});