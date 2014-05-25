define(['Framework/assert', 'Framework/asynchronousTest'], function (assert, asynchronousTest) {

    window.testContext.fixtures.InjectAjaxContentIntoDomTests.tests.push(new asynchronousTest("WillInjectAjaxContentIntoDomTests", function () {
        return $.get("tests/testData.html", function (data) { $("#targetTest").html(data); });
    },
        function (data) {
            console.log($("#targetTest").length);
            console.log($("#targetTest").html());
            assert.areEqual("<div>This is injected into the DOM</div>", $("#targetTest").html());
        })
    );

    return window.testContext.fixtures.InjectAjaxContentIntoDomTests;
});


