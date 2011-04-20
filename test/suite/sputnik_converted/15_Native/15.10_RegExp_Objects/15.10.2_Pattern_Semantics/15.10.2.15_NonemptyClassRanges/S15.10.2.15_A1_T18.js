// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.15_A1_T18;
* @section: 15.10.2.15;
* @assertion: The internal helper function CharacterRange takes two CharSet parameters A and B and performs the 
* following: 
* If A does not contain exactly one character or B does not contain exactly one character then throw 
* a SyntaxError exception;
* @description: Checking if execution of "/[\c0001d-G]/.exec("1")" leads to throwing the correct exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.15_A1_T18",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.15_NonemptyClassRanges\S15.10.2.15_A1_T18.js",

assertion: "The internal helper function CharacterRange takes two CharSet parameters A and B and performs the",

description: "Checking if execution of \"/[\\c0001d-G]/.exec(\"1\")\" leads to throwing the correct exception",

test: function testcase() {
   //CHECK#1
try {
  $ERROR('#1.1: /[\\c0001d-G]/.exec("1") throw SyntaxError. Actual: ' + (new RegExp("[\\c0001d-G]").exec("1")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[\\c0001d-G]/.exec("1") throw SyntaxError. Actual: ' + (e));
  }
}

 }
});

