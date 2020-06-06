"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is an abstract class:
// - can't be used to create object directly
// - only used as a parent class
// - can contain real implementaion for some methods
// - the implemented methods can refer to other methods that don't actually exist yet
// (its still necesarry to provide names and types for the un-implemented menthods)
// - can make child classed promise to implement some ohter method
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
