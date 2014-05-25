define(['Framework/assert', 'Framework/test'], function (assert, test) {

    window.testContext.fixtures.DemoTest.tests.push(new test("WillIncludeNonModuleAndCallAddMethod", function () {
        var res = AddTwoNumbers(1, 4);
        assert.areEqual(5,res);
    }));

    return window.testContext.fixtures.DemoTest;
});