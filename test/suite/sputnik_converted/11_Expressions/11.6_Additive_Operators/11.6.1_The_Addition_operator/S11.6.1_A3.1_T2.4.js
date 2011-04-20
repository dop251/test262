// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.1_A3.1_T2.4;
 * @section: 11.6.1;
 * @assertion: If Type(Primitive(x)) is not String and Type(Primitive(y)) is not String, then operator x + y returns ToNumber(x) + ToNumber(y); 
 * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Boolean (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A3.1_T2.4",

path: "11_Expressions\11.6_Additive_Operators\11.6.1_The_Addition_operator\S11.6.1_A3.1_T2.4.js",

assertion: "If Type(Primitive(x)) is not String and Type(Primitive(y)) is not String, then operator x + y returns ToNumber(x) + ToNumber(y)",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Boolean (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (isNaN(true + undefined) !== true) {
  $ERROR('#1: true + undefined === Not-a-Number. Actual: ' + (true + undefined));
}

//CHECK#2
if (isNaN(undefined + true) !== true) {
  $ERROR('#2: undefined + true === Not-a-Number. Actual: ' + (undefined + true));
}

//CHECK#3
if (isNaN(new Boolean(true) + undefined) !== true) {
  $ERROR('#3: new Boolean(true) + undefined === Not-a-Number. Actual: ' + (new Boolean(true) + undefined));
}

//CHECK#4
if (isNaN(undefined + new Boolean(true)) !== true) {
  $ERROR('#4: undefined + new Boolean(true) === Not-a-Number. Actual: ' + (undefined + new Boolean(true)));
}

 }
});

