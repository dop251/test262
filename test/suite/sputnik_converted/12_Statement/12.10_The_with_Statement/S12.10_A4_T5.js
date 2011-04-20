// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A4_T5;
 * @section: 12.10;
 * @assertion: Changing property using "eval" statement containing "with" statement;
 * @description: Changing array property;
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A4_T5",

path: "12_Statement\12.10_The_with_Statement\S12.10_A4_T5.js",

assertion: "Changing property using \"eval\" statement containing \"with\" statement",

description: "Changing array property",

test: function testcase() {
   this.p1 = 'a';
var myObj = {
  p1: [1,2,3], 
}
eval("with(myObj){p1=[3,2,1]}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1[2] !== 1){
  $ERROR('#1: myObj.p1[2] === 1. Actual:  myObj.p1[2] ==='+ myObj.p1[2]  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 === 'a'){
  $ERROR('#2: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

