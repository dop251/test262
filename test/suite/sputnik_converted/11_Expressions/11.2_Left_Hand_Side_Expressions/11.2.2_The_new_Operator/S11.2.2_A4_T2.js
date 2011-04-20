// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.2_A4_T2;
* @section: 11.2.2;
* @assertion: If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError;
* @description: Checking Number object case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.2_A4_T2",

path: "11_Expressions\11.2_Left_Hand_Side_Expressions\11.2.2_The_new_Operator\S11.2.2_A4_T2.js",

assertion: "If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError",

description: "Checking Number object case",

test: function testcase() {
   //CHECK#1
try {
  new new Number(1);
  $ERROR('#1: new new Number(1) throw TypeError');
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1: new new Number(1) throw TypeError');
  }
}

//CHECK#2
try {
  var x = new Number(1);
  new x;
  $ERROR('#2: var x = new Number(1); new x throw TypeError');
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2: var x = new Number(1); new x throw TypeError');
  }
}

//CHECK#3
try {
  var x = new Number(1);
  new x();
  $ERROR('#3: var x = new Number(1); new x() throw TypeError');
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#3: var x = new Number(1); new x() throw TypeError');
  }
}


 }
});

