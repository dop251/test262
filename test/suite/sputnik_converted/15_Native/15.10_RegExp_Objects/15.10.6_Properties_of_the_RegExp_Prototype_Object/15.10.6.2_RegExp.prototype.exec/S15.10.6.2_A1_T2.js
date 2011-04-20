// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A1_T2;
* @section: 15.10.6.2;
* @assertion: RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and 
* returns an Array object containing the results of the match, or null if the string did not match;
* @description: String is new String("123") and RegExp is /((1)|(12))((3)|(23))/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A1_T2",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.2_RegExp.prototype.exec\S15.10.6.2_A1_T2.js",

assertion: "RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and",

description: "String is new String(\"123\") and RegExp is /((1)|(12))((3)|(23))/",

test: function testcase() {
   with(/((1)|(12))((3)|(23))/){
    __executed = exec(new String("123"));
}

__expected = ["123", "1", "1", undefined, "23", undefined, "23"];
__expected.index=0;
__expected.input="123";

//CHECK#0
if ((__executed instanceof Array) !== true) {
	$ERROR('#0: with(/((1)|(12))((3)|(23))/){__executed = exec(new String("123"));} (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: with(/((1)|(12))((3)|(23))/){__executed = exec(new String("123"));} __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: with(/((1)|(12))((3)|(23))/){__executed = exec(new String("123"));} __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: with(/((1)|(12))((3)|(23))/){__executed = exec(new String("123"));} __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: with(/((1)|(12))((3)|(23))/){__executed = exec(new String("123"));} __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}


 }
});

