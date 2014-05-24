define(['Framework/assert', 'Framework/test'], function (assert, test) {

    window.testContext.fixtures.test3.tests.push(new test("Test1a", function () {
        assert.areEqual(1, 1);
    }));

    window.testContext.fixtures.test3.tests.push(new test("Test2b", function () {
        assert.areEqual(1, 41);
    }));

    return window.testContext.fixtures.test3;
});