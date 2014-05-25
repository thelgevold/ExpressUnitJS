
define(['Framework/testResult', 'Framework/testFixtureTreeNode', 'Framework/testTreeNode', 'Configuration/includedTestFixtures'],
       function (testResult, testFixtureTreeNode, testTreeNode, includedTestFixtures) {

    var testContext = function () {
        this.includedTestFixtures = includedTestFixtures;
        this.treeNodes = ko.observableArray();
        this.fixtures = {};

        for (var i = 0; i < this.includedTestFixtures.length; i++) {
            this.fixtures[this.includedTestFixtures[i]] = { name: this.includedTestFixtures[i] ,tests:[]};
            this.treeNodes.push(new testFixtureTreeNode(this.includedTestFixtures[i]));
        }

        this.testFailedMessage = ko.observable();

        this.testPassedMessage = ko.observable();


        this.totalPassed = ko.observable(0);
        this.totalFailed = ko.observable(0);

        this.showOutput = ko.observable(false);
        this.toggleButtonText = ko.observable("Show DOM elements created by tests");

        var self = this;

        this.showFailedMessage = ko.computed(function () {
            if (!self.testFailedMessage()) {
                return false;
            }
            return true;

        },self);

        this.showPassedMessage = ko.computed(function () {
            if (!self.testPassedMessage()) {
                return false;
            }
            return true;

        }, self);


        ko.applyBindings(this);
    };
    
    testContext.prototype.toggleTestOutput = function () {
        this.showOutput(!this.showOutput());

        if (this.showOutput() === false) {
            this.toggleButtonText("Show DOM elements created by tests");
        }
        else {
            this.toggleButtonText("Hide DOM elements created by tests");
        }

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
            for (var i = 0 ; i < testFixture.tests.length; i++) {
                self.runTest(i,testFixture);
            }
        });
    };
    
    testContext.prototype.runTest = function (i,testFixture) {
        var self = this;
        try {
            var currentTreeNodeIndex = self.findTestFixtureIndex(testFixture);
            //Run any asynch loading of data
            $.when(testFixture.tests[i].asynchLoading()).then(function (data) {
                try
                {
                    testFixture.tests[i].testMethod(data);
                    self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, true, testFixture.tests[i].name + " passed"));
                    self.totalPassed(self.totalPassed() + 1);
                }
                catch (error) {
                    self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, false, error));
                    self.totalFailed(self.totalFailed() + 1);
                }
            //Error handling
            }, function () {
                self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, false, error));
                self.totalFailed(self.totalFailed() + 1);
            })
        }
        catch (error) {
            self.treeNodes()[currentTreeNodeIndex].tests.push(new testTreeNode(testFixture.tests[i].name, false, error));
            self.totalFailed(self.totalFailed() + 1);
        }
    }
    
    testContext.prototype.clearSelectedNodes = function () {
        for (var i = 0; i < this.treeNodes().length; i++) {
            var treeNode = this.treeNodes()[i];
            for (var j = 0; j < treeNode.tests().length; j++) {
                var currentCss = treeNode.tests()[j].css();
                treeNode.tests()[j].css(currentCss.replace("testSelected",""))
            }
        }
    }

    window.defineTest = function (name) {
        $(document).ready(function () {
            require(['Tests/' + name], function (testFixture) {
                window.testContext.runTestsIn(testFixture);
            });
        });
    };

    window.testContext = new testContext();
    return window.testContext;
});



