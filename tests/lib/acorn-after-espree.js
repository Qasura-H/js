/**
 * @fileoverview Tests for checking acorn works after espree was loaded.
 * @author Toru Nagashima
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * BSD 2-Clause License
 */


"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var acorn = require("acorn"),
    assert = require("chai").assert;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", function() {
    it("acorn.parse() should work after espree was loaded.", function() {
        var before = acorn.parse("var foo = bar /*world*/;");
        require("../../espree");
        var after = acorn.parse("var foo = bar /*world*/;");

        assert.deepEqual(after, before);
    });
});
