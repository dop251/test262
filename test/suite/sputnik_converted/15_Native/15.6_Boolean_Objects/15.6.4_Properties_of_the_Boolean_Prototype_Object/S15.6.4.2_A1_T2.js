// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.4.2_A1_T2;
 * @section: 15.6.4.2;
 * @assertion: toString: If this boolean value is true, then the string "true" 
 * is returned, otherwise, this boolean value must be false, and the string 
 * "false" is returned;
 * @description: with some argument;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.4.2_A1_T2",

path: "15_Native\15.6_Boolean_Objects\15.6.4_Properties_of_the_Boolean_Prototype_Object\S15.6.4.2_A1_T2.js",

assertion: "toString: If this boolean value is true, then the string \"true\"",

description: "with some argument",

test: function testcase() {
   //CHECK#1
if(Boolean.prototype.toString(true) !== "false"){
  $ERROR('#1: Boolean.prototype.toString(true) === "false"');
}

//CHECK#2
if((new Boolean()).toString(true) !== "false"){
  $ERROR('#2: (new Boolean()).toString(true) === "false"');
}

//CHECK#3
if((new Boolean(false)).toString(true) !== "false"){
  $ERROR('#3: (new Boolean(false)).toString(true) === "false"');
}

//CHECK#4
if((new Boolean(true)).toString(false) !== "true"){
  $ERROR('#4: (new Boolean(true)).toString(false) === "true"');
}

//CHECK#5
if((new Boolean(1)).toString(false) !== "true"){
  $ERROR('#5: (new Boolean(1)).toString(false) === "true"');
}

//CHECK#6
if((new Boolean(0)).toString(true) !== "false"){
  $ERROR('#6: (new Boolean(0)).toString(true) === "false"');
}

//CHECK#7
if((new Boolean(new Object())).toString(false) !== "true"){
  $ERROR('#7: (new Boolean(new Object())).toString(false) === "true"');
}

 }
});

