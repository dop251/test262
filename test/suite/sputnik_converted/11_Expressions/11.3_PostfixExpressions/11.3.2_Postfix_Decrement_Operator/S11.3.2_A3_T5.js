// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.2_A3_T5;
* @section: 11.3.2, 11.6.3;
* @assertion: Operator x-- returns x = ToNumber(x) - 1;
* @description: Type(x) is Object object or Function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.2_A3_T5",

path: "11_Expressions\11.3_PostfixExpressions\11.3.2_Postfix_Decrement_Operator\S11.3.2_A3_T5.js",

assertion: "Operator x-- returns x = ToNumber(x) - 1",

description: "Type(x) is Object object or Function object",

test: function testcase() {
   //CHECK#1
var x = {}; 
x--; 
if (isNaN(x) !== true) {
  $ERROR('#1: var x = {}; x--; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
var x = function(){return 1}; 
x--; 
if (isNaN(x) !== true) {
  $ERROR('#2: var x = function(){return 1}; x--; x === Not-a-Number. Actual: ' + (x));
}

 }
});

