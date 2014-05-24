
define(['Framework/testResult', 'Framework/testFixtureTreeNode', 'Framework/testTreeNode'], function (testResult, testFixtureTreeNode, testTreeNode) {

    var testContext = function () {
        this.includedTestFixtures = ["adderTests", "test2", "test3"];
        this.treeNodes = ko.observableArray();
        this.fixtures = {};

        for (var i = 0; i < this.includedTestFixtures.length; i++) {
            this.fixtures[this.includedTestFixtures[i]] = { name: this.includedTestFixtures[i] ,tests:[]};
            this.treeNodes.push(new testFixtureTreeNode(this.includedTestFixtures[i]));
        }

        this.testMessage = ko.observable();

        var self = this;

        this.showMessage = ko.computed(function () {
            if (!self.testMessage()) {
                return false;
            }
            return true;

        },self);

        ko.applyBindings(this);
    };
    
    testContext.prototype.findTestFixtureIndex = function (fixture) {
        for (var i = 0; i < this.treeNodes().length; i++) {
            if (this.treeNodes()[i].testFixtureName === fixture.name) {
                return i;
            }
        }
        return null;
    };

    testContext.prototype.runTestsIn = function (testFixture) {

        var self = this;

        $(document).ready(function () {

            var currentTreeNodeIndex = self.findTestFixtureIndex(testFixture);

            for (var i = 0 ; i < testFixture.tests.length; i++) {
                try {
                    testFixture.tests[i].testMethod();
                    self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, true,""));
                }
                catch (error) {
                    self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, false,error));
                }
            }
        });
    };

    window.defineTest = function (name) {

        require(['Tests/' + name], function (testFixture) {
            window.testContext.runTestsIn(testFixture);
        });
    };

    window.testContext = new testContext();
    return window.testContext;
});



