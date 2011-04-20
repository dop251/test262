// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.1_A3_T2;
* @section: 15.3.5.1;
* @assertion: the length property has the attributes { ReadOnly };
* @description: Checking if varying the length property of Function("arg1,arg2,arg3", null) fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.1_A3_T2",

path: "15_Native\15.3_Function_Objects\15.3.5_Properties_of_Function_Instances\S15.3.5.1_A3_T2.js",

assertion: "the length property has the attributes { ReadOnly }",

description: "Checking if varying the length property of Function(\"arg1,arg2,arg3\", null) fails",

test: function testcase() {
   f =  Function("arg1,arg2,arg3", null);

//CHECK#1
if (!(f.hasOwnProperty('length'))) {
  $FAIL('#1: the function has length property.');
}

length = f.length;

f.length = function(){};

//CHECK#2
if (f.length !== length) {
  $ERROR('#2: the function.length property has the attributes ReadOnly');
}

//CHECK#3
try {
  f.length();
  $ERROR('#3: the function.length property has the attributes ReadOnly');
} catch (e) {
  ;
}

//CHECK#4
if (f.length !== 3) {
  $ERROR('#4: the length property has the attributes { ReadOnly }');
}

 }
});

