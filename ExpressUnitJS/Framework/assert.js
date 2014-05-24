define([], function () {
    var assert = function () { };

    assert.prototype.areEqual = function (o1, o2) {
        var res = o1 === o2;
        if (res === false) {
            throw "areEqual failed";
        }

        return true;
    };

    assert.prototype.areNotEqual = function (o1, o2) {
        var res = o1 !== o2;

        if (res === false) {
            throw "areNotEqual failed";
        }

        return true;
    };

    return new assert();
});

