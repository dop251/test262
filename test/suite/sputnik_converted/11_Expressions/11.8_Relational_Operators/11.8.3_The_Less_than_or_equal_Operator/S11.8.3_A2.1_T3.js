// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.3_A2.1_T3;
 * @section: 11.8.3, 11.8.5;
 * @assertion: Operator x <= y uses GetValue;
 * @description: If GetBase(y) is null, throw ReferenceError; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.3_A2.1_T3",

path: "11_Expressions\11.8_Relational_Operators\11.8.3_The_Less_than_or_equal_Operator\S11.8.3_A2.1_T3.js",

assertion: "Operator x <= y uses GetValue",

description: "If GetBase(y) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  1 <= y;
  $ERROR('#1.1: 1 <= y throw ReferenceError. Actual: ' + (1 <= y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 <= y throw ReferenceError. Actual: ' + (e));  
  }
}


 }
});

