// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.3.4_A5.6;
* @section: 15.1.3.4;
* @assertion: The encodeURIComponent property has not prototype property;
* @description: Checking encodeURIComponent.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.4_A5.6",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.4_encodeURIComponent\S15.1.3.4_A5.6.js",

assertion: "The encodeURIComponent property has not prototype property",

description: "Checking encodeURIComponent.prototype",

test: function testcase() {
   //CHECK#1
if (encodeURIComponent.prototype !== undefined) {
  $ERROR('#1: encodeURIComponent.prototype === undefined. Actual: ' + (encodeURIComponent.prototype));
}

 }
});

