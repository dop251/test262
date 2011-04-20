// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A3_T9;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: + evaluates by returning the two results 1 and \infty;
* @description: Execute /d+/.exec("abcdddddefg") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A3_T9",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.7_Quantifier\S15.10.2.7_A3_T9.js",

assertion: "The production QuantifierPrefix :: + evaluates by returning the two results 1 and \\infty",

description: "Execute /d+/.exec(\"abcdddddefg\") and check results",

test: function testcase() {
   __executed = /d+/.exec("abcdddddefg");

__expected = ["ddddd"];
__expected.index = 3;
__expected.input = "abcdddddefg";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /d+/.exec("abcdddddefg"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /d+/.exec("abcdddddefg"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /d+/.exec("abcdddddefg"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /d+/.exec("abcdddddefg"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

