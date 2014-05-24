
function RunAllTests(){
    require(['Framework/testRunner', 'Framework/testContext'], function (runner, testContext) {

        $.ajaxSetup({ cache: false });

        require.config({
            urlArgs: "bust=" + (new Date()).getTime()
        });

        runner.runTests();
    });
}
   
RunAllTests();
