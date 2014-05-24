define([], function () {
    var testFixtureTreeNode = function (testFixtureName)
    {
        this.testFixtureName = testFixtureName;
        this.tests = ko.observableArray([]);

        var self = this;

        this.passedCount = ko.computed(function () {
            return self.getCount(true,this.tests());
        }, self);

        this.failedCount = ko.computed(function () {
            return self.getCount(false,this.tests());
        }, self);

        this.icon = ko.observable("treeNodeIcon glyphicon glyphicon-minus");

        this.showTests = ko.observable(true);
    };

    testFixtureTreeNode.prototype.expandColapse = function () {
        this.showTests(!this.showTests());

        if (this.showTests() === false) {
            this.icon("treeNodeIcon glyphicon glyphicon-plus");
        }
        else {
            this.icon("treeNodeIcon glyphicon glyphicon-minus");
        }
    };

    testFixtureTreeNode.prototype.getCount = function(value,items){
        var count = 0;
        for(var i = 0; i < items.length; i++){
            if(items[i].passed === value){
                count++;
            }
        }

        return count;
    };

    return testFixtureTreeNode;
});