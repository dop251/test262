// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A3.1_T1;
 * @section: 7.2, 7.4;
 * @assertion: Single line comment can contain HORIZONTAL TAB (U+0009);
 * @description: Use HORIZONTAL TAB(\u0009);
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A3.1_T1",

path: "07_Lexical_Conventions\7.2_White_Space\S7.2_A3.1_T1.js",

assertion: "Single line comment can contain HORIZONTAL TAB (U+0009)",

description: "Use HORIZONTAL TAB(\\u0009)",

test: function testcase() {
   // CHECK#1
eval("//\u0009 single line \u0009 comment \u0009");

//CHECK#2
var x = 0;
eval("//\u0009 single line \u0009 comment \u0009 x = 1;");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("//\\u0009 single line \\u0009 comment \\u0009 x = 1;"); x === 0. Actual: ' + (x));
}

 }
});

