// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A10;
* @section: 15.5.4.14;
* @assertion: The String.prototype.split.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.split.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.14_String.prototype.split\S15.5.4.14_A10.js",

assertion: "The String.prototype.split.length property has the attribute ReadOnly",

description: "Checking if varying the String.prototype.split.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.split.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.split.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.split.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.split.length;

String.prototype.split.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.split.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.split.length; String.prototype.split.length = function(){return "shifted";}; String.prototype.split.length === __obj. Actual: '+String.prototype.split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

