define(['Framework/assert','Framework/test'], function (assert, test) {

    window.testContext.fixtures.adderTests.tests.push(new test("willAddTwoPositiveNumbers", function () {
        assert.areEqual(1, 1);
    }));

    window.testContext.fixtures.adderTests.tests.push(new test("willAddTwoNegativeNumbers", function () {
        assert.areEqual(1, 2);
    }));

    return window.testContext.fixtures.adderTests;
});