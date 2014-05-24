define([], function () {

    var testRunner = function () { };

    testRunner.prototype.runTests = function () {
        $("#temp").html("");
        $(document).ready(function () {

            for (var i = 0; i < testContext.includedTestFixtures.length; i++) {
                $.get("Tests/" + testContext.includedTestFixtures[i] + ".html", function (data) {
                    $("#temp").append("span").html(data);
                })
            }
        });
    };

    return new testRunner();
});