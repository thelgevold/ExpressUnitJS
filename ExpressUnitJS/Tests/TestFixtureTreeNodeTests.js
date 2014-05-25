﻿define(['Framework/assert', 'Framework/test', 'Framework/testFixtureTreeNode'], function (assert, test, testFixtureTreeNode) {

    window.testContext.fixtures.TestFixtureTreeNodeTests.tests.push(new test("WillGetCorrectPassedCount", function () {
        var node = new testFixtureTreeNode();
        var items = [];
        items.push({ passed: true });
        items.push({ passed: false });
        items.push({ passed: true });

        var count = node.getCount(true, items);
        assert.areEqual(2, count);
    }));

    window.testContext.fixtures.TestFixtureTreeNodeTests.tests.push(new test("WillGetCorrectFailedCount", function () {
        var node = new testFixtureTreeNode();
        var items = [];
        items.push({ passed: true });
        items.push({ passed: false });
        items.push({ passed: true });

        var count = node.getCount(false, items);
        assert.areEqual(1, count);
    }));

    return window.testContext.fixtures.TestFixtureTreeNodeTests;
});