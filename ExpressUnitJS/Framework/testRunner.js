define([], function () {

    var testRunner = function () { };

    testRunner.prototype.runTests = function () {
        $("#temp").html("");
        var self = this;
        $(document).ready(function () {

            for (var i = 0; i < testContext.includedTestFixtures.length; i++) {
                self.runTest(i);
            }
        });
    };

    testRunner.prototype.runTest = function (i) {

        $.get("Tests/" + testContext.includedTestFixtures[i] + ".html", function (data) {

            $("#temp").append("<div class='panel panel-default'><div class='panel-heading'>" + testContext.includedTestFixtures[i] + "</div><div class='panel-body' id='" + testContext.includedTestFixtures[i] + "'/> </div>");
            $("#" + testContext.includedTestFixtures[i]).html(data);
            $("#" + testContext.includedTestFixtures[i]).append('<script type="text/javascript">defineTest("' + testContext.includedTestFixtures[i] + '");</script>');
        });
    };

    return new testRunner();
});