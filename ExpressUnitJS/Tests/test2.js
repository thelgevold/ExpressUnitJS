define(['Framework/assert', 'Framework/test'], function (assert, test) {

    window.testContext.fixtures.test2.tests.push(new test("Test1", function () {
        assert.areEqual(1, 1);
    }));

    window.testContext.fixtures.test2.tests.push(new test("Test2", function () {
        assert.areEqual(1, 1);
    }));

    return window.testContext.fixtures.test2;
});