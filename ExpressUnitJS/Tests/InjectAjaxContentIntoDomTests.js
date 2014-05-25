define(['Framework/assert', 'Framework/asynchronousTest'], function (assert, asynchronousTest) {

    window.testContext.fixtures.InjectAjaxContentIntoDomTests.tests.push(new asynchronousTest("WillInjectAjaxContentIntoDomTests", function () {
        return $.get("tests/testData.html");
    },
        function (data) {
            $("#target").html(data);
            assert.areEqual("<div>This is injected into the DOM</div>", $("#target").html());
        })
    );

    return window.testContext.fixtures.InjectAjaxContentIntoDomTests;
});


