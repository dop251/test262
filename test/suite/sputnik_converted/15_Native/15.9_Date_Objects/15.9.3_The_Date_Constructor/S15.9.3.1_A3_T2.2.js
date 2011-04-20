// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.3.1_A3_T2.2;
 * @section: 15.9.3.1;
 * @assertion: The [[Class]] property of the newly constructed object 
 * is set to "Date";
 * @description: Test based on overwriting prototype.toString - 3 arguments, (year, month, date);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.3.1_A3_T2.2",

path: "15_Native\15.9_Date_Objects\15.9.3_The_Date_Constructor\S15.9.3.1_A3_T2.2.js",

assertion: "The [[Class]] property of the newly constructed object",

description: "Test based on overwriting prototype.toString - 3 arguments, (year, month, date)",

test: function testcase() {
   Date.prototype.toString = Object.prototype.toString;

var x1 = new Date(1899, 11, 31);
if (x1.toString() !== "[object Date]") {
  $FAIL("#1: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x2 = new Date(1899, 12, 1);
if (x2.toString() !== "[object Date]") {
  $FAIL("#2: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x3 = new Date(1900, 0, 1);
if (x3.toString() !== "[object Date]") {
  $FAIL("#3: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x4 = new Date(1969, 11, 31);
if (x4.toString() !== "[object Date]") {
  $FAIL("#4: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x5 = new Date(1969, 12, 1);
if (x5.toString() !== "[object Date]") {
  $FAIL("#5: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x6 = new Date(1970, 0, 1);
if (x6.toString() !== "[object Date]") {
  $FAIL("#6: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x7 = new Date(1999, 11, 31);
if (x7.toString() !== "[object Date]") {
  $FAIL("#7: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x8 = new Date(1999, 12, 1);
if (x8.toString() !== "[object Date]") {
  $FAIL("#8: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x9 = new Date(2000, 0, 1);
if (x9.toString() !== "[object Date]") {
  $FAIL("#9: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x10 = new Date(2099, 11, 31);
if (x10.toString() !== "[object Date]") {
  $FAIL("#10: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x11 = new Date(2099, 12, 1);
if (x11.toString() !== "[object Date]") {
  $FAIL("#11: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x12 = new Date(2100, 0, 1);
if (x12.toString() !== "[object Date]") {
  $FAIL("#12: The [[Class]] property of the newly constructed object is set to 'Date'");
}


 }
});

