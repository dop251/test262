// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.2_A3_T5;
* @section: 11.2.2;
* @assertion: If Type(NewExpression) or Type(MemberExpression) is not Object, throw TypeError;
* @description: Checking "null primitive" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.2_A3_T5",

path: "11_Expressions\11.2_Left_Hand_Side_Expressions\11.2.2_The_new_Operator\S11.2.2_A3_T5.js",

assertion: "If Type(NewExpression) or Type(MemberExpression) is not Object, throw TypeError",

description: "Checking \"null primitive\" case",

test: function testcase() {
   //CHECK#1
try {
  new null;
  $ERROR('#1: new null throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1: new null throw TypeError');	
  }
}

//CHECK#2
try {
  var x = null;
  new x;
  $ERROR('#2: var x = null; new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2: var x = null; new x throw TypeError');	
  }
}

//CHECK#3
try {
  var x = null;
  new x();
  $ERROR('#3: var x = null; new x() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#3: var x = null; new x() throw TypeError'); 
  }
}

 }
});

