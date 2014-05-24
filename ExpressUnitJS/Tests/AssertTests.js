define(['Framework/assert','Framework/test'], function (assert, test) {

    window.testContext.fixtures.AssertTests.tests.push(new test("WillAssertTwoStringsAsEqual", function () {
        assert.areEqual("test", "test");
    }));

    window.testContext.fixtures.AssertTests.tests.push(new test("WillAssertTwoNumbersAsEqual", function () {
        assert.areEqual(1, 1);
    }));

    window.testContext.fixtures.AssertTests.tests.push(new test("WillAssertTwoNumbersAsNotEqual", function () {
        assert.areNotEqual(1, 2);
    }));

    window.testContext.fixtures.AssertTests.tests.push(new test("WillAssertTwoStringsAsNotEqual", function () {
        assert.areNotEqual("test1", "test2");
    }));

    return window.testContext.fixtures.AssertTests;
});